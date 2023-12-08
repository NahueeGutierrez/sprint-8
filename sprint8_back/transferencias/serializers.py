from rest_framework import serializers
from .models import Cuenta, Transferencias


class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'


class TransferenciasSerializer(serializers.ModelSerializer):
    origen = CuentaSerializer(read_only=True)
    destino = CuentaSerializer(read_only=True)

    class Meta:
        model = Transferencias
        fields = '__all__'
