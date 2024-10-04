from django.urls import include, path

# from app.employments.apis import employment_apis
from app.identity_documents.apis import (
    IdentityDocsCreate,
    IdentityDocsRetrieveApi,
    IdentityDocsUpdate,
)

detail_url = [
    path("", IdentityDocsRetrieveApi.as_view(), name="get-identity-docs"),
    path(
        "update/", IdentityDocsUpdate.as_view(), name="update-dentity-documents"
    ),
]

urlpatterns = [
    path(
        "create/",
        IdentityDocsCreate.as_view(),
        name="create-identity-documents",
    ),
    path("<int:pk>/", include((detail_url, "detail urls"))),
]
