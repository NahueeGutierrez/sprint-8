from django.db import models

# Create your models here.

class Cuenta(models.Model):
    nombre = models.CharField(max_length=50)
    saldo = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre


class Transferencias(models.Model):
    fecha = models.DateField()
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    origen = models.ForeignKey(Cuenta, related_name='transferencias_origen', on_delete=models.CASCADE)
    destino = models.ForeignKey(Cuenta, related_name='transferencias_destino', on_delete=models.CASCADE)

    def __str__(self):
        return f'Transferencia de {self.origen.nombre} a {self.destino.nombre}'
