from django.shortcuts import render
from rest_framework import generics
from .models import Cuenta, Transferencias
from .serializers import CuentaSerializer, TransferenciasSerializer
# Create your views here.

class CuentaLista(generics.ListCreateAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

class CuentaDetalle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

class TransferenciasLista(generics.ListCreateAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer

class TransferenciasDetalle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer

