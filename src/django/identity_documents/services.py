from datetime import datetime
from typing import Optional

from django.utils import timezone
from rest_framework import status

from app.core.exceptions import ApplicationError
from app.identity_documents import models


def create_identity_documents(
    *,
    type: Optional[str] = None,
    identifier_code: Optional[str] = None,
    expiry: Optional[datetime] = None,  # change to date
):
    try:
        return models.IdentityDocumentInfo.objects.create(
            type=type, identifier_code=identifier_code, expiry=expiry
        )
    except Exception as e:
        raise ApplicationError(
            message="Something Went wrong",
            extra=str(e),
            status=status.HTTP_400_BAD_REQUEST,
        )


def update_identity_documents(*, identity_docs_id: int, **kwargs):
    if "updated_at" not in kwargs:
        kwargs["updated_at"] = timezone.localtime()
    models.IdentityDocumentInfo.objects.filter(id=identity_docs_id).update(
        **kwargs
    )
