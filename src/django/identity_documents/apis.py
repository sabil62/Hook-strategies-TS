from drf_spectacular.utils import extend_schema
from rest_framework import request, serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView

from app.common import docs, permissions
from app.common import serializers as common_serializers
from app.core import mixins
from app.identity_documents import models, selectors, services


class IdentityDocsPermission(mixins.ApiAuthMixin):
    permission_classes = {
        permissions.IsAdministrator
        | permissions.IsAccounting
        | permissions.IsGeneralManager
        | permissions.IsSalesPerson
    }


class IdentityDocsRetrieveApi(IdentityDocsPermission, APIView):
    @docs.gen_serializer_name
    class OutputSerializer(common_serializers.BaseSerializer):
        type = serializers.CharField()
        identifier_code = serializers.CharField()
        expiry = serializers.DateField()

    def get(self, request: request.Request, pk: int):
        identity_docs = selectors.get_identity_docs_by_id(
            identifier_code=pk, raise_exception=True
        )
        assert identity_docs is not None
        serializer = self.OutputSerializer(identity_docs)
        return Response(status=status.HTTP_200_OK, data=serializer.data)


class IdentityDocsCreate(mixins.ApiAuthMixin, APIView):
    """Create new Identity Doc"""

    @docs.gen_serializer_name
    class InputSerializer(serializers.Serializer):
        type = serializers.ChoiceField(
            models.IdentityDocumentInfo.IdTypeChoices
        )
        identifier_code = serializers.CharField(max_length=255)
        expiry = serializers.DateField(required=False)

    @docs.gen_serializer_name
    class OutputSerializer(common_serializers.BaseSerializer):
        type = serializers.CharField()
        identifier_code = serializers.CharField()
        expiry = serializers.DateField()

    @extend_schema(
        operation_id="Create Identity Document",
        responses={201: OutputSerializer},
        request=InputSerializer,
    )
    def post(self, request: request.Request):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        identity_document = services.create_identity_documents(
            **serializer.validated_data
        )

        serializer = self.OutputSerializer(identity_document)
        return Response(status=status.HTTP_201_CREATED, data=serializer.data)


class IdentityDocsUpdate(mixins.ApiAuthMixin, APIView):
    @extend_schema(
        operation_id="Update Identity Documents",
        request=IdentityDocsCreate.InputSerializer,
    )
    def patch(self, request: request.Request, pk: int):
        serializer = IdentityDocsCreate.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        services.update_identity_documents(
            identity_docs_id=pk, **serializer.validated_data
        )
        return Response(status=status.HTTP_200_OK)
