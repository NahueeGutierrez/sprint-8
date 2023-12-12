from django.db import models

class AumentoLimite(models.Model):
    usuario_id = models.CharField(max_length=50)
    monto_solicitado = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_solicitud = models.DateTimeField(auto_now_add=True)
    aprobada = models.BooleanField(default=False)
