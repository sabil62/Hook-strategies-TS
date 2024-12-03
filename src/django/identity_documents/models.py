from django.db import models
from django.utils.translation import gettext_lazy as _

from app.common.models import BaseModel


class IdentityDocumentInfo(BaseModel):
    class IdTypeChoices(models.TextChoices):
        OTHR = "OTHR", _("Other")
        PSPT = "PSPT", _("Passport")
        DRLC = "DRLC", _("Driver's License")
        CACS = "CACS", _("Canadian Citizenship")
        CAPP = "CAPP", _("Canadian Passport")
        CIC = "CIC", _("Citizenship and Immigration Canada Form")
        CIS = "CIS", _("Certificate of Indian Status")
        CON = "CON", _("Certificate of Naturalization")
        OT = "OT", _("Other document bearing photo and signature")
        PHI = "PHI", _("Provincial Health Insurance Card")
        PRC = "PRC", _("Permanent Resident Card")
        SIN = "SIN", _("Social Insurance Card")
        CFL = "CFL", _("Canadian Firearms Licence")
        BRTH = "BRTH", _("Birth Certificate")

    type = models.CharField(
        max_length=255, choices=IdTypeChoices.choices, null=True, blank=True
    )
    identifier_code = models.CharField(max_length=255, null=True, blank=True)
    expiry = models.DateField(null=True, blank=True)

    class Meta:
        db_table = "identity_document_info"

    def __str__(self):
        return f"Identity Document Info ({self.pk})"
