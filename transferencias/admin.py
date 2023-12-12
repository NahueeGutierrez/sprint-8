from django.contrib import admin
from .models import *


class CuentaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'saldo')
    # Otros atributos personalizados para la administración de Cuenta


class TransferenciasAdmin(admin.ModelAdmin):
    list_display = ('origen', 'destino', 'cantidad', 'fecha')
    # Otros atributos personalizados para la administración de Transferencia


# Registra los modelos utilizando las clases de administración personalizadas
admin.site.register(Cuenta, CuentaAdmin)
admin.site.register(Transferencias, TransferenciasAdmin)