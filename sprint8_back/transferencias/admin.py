from django.contrib import admin
from .models import *
from transferencias.models import Transferencias

# Register your models here.
@admin.register(Cuenta)
class CuentaAdmin(admin.ModelAdmin):
    readonly_fields = ("saldo", "nombre")

@admin.register(Transferencias)
class TransferenciaAdmin(admin.ModelAdmin):
    readonly_fields = ("fecha", "cantidad", "origen", "destino")