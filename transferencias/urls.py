from django.urls import path
from .views import CuentaLista, CuentaDetalle, TransferenciasLista, TransferenciasDetalle
from django.contrib import admin

urlpatterns=[
    path('cuentas/', CuentaLista.as_view(), name='cuenta-lista'),
    path('cuentas/<int:pk>', CuentaDetalle.as_view(), name='cuenta-detalle'),
    path('transferencias/', TransferenciasLista.as_view(), name='transferencias-lista'),
    path('transferencias/<int:pk>', TransferenciasDetalle.as_view(), name='transferencia-detalle'),
    path('', TransferenciasLista.as_view(), name='transferencia-lista')
    ]