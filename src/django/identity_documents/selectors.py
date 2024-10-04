from rest_framework import status

from app.core.exceptions import ApplicationError
from app.identity_documents import models


def get_identity_docs_by_id(
    identifier_code: int, raise_exception: bool = False
):
    try:
        return models.IdentityDocumentInfo.objects.get(id=identifier_code)
    except models.IdentityDocumentInfo.DoesNotExist:
        if raise_exception:
            raise ApplicationError(
                message="Somthing wrong",
                status=status.HTTP_400_BAD_REQUEST,
            )
        return None


def list_identity_docs():
    return models.IdentityDocumentInfo.objects.all()
