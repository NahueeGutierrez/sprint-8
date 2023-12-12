from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Cuenta, Transferencias
from .serializers import CuentaSerializer, TransferenciasSerializer

class CuentaLista(generics.ListCreateAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

class CuentaDetalle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        transferencias_origen = Transferencias.objects.filter(origen=instance)
        transferencias_serializer = TransferenciasSerializer(transferencias_origen, many=True)
        data = {
            'cuenta_details': serializer.data,
            'transferencias_origen': transferencias_serializer.data
        }
        return Response(data)


class TransferenciasLista(generics.ListCreateAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer

    def list(self, request, *args, **kwargs):
        transferencias = Transferencias.objects.all()
        serializer = TransferenciasSerializer(transferencias, many=True)
        return Response(serializer.data)
    

class TransferenciasDetalle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer
