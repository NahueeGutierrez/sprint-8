from rest_framework import serializers
from .models import Cuenta, Transferencias

class TransferenciasBasicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencias
        fields = ['origen', 'destino', 'cantidad']

class CuentaSerializer(serializers.ModelSerializer):
    transferencias_origen = TransferenciasBasicoSerializer(many=True, read_only=True)

    class Meta:
        model = Cuenta
        fields = ['nombre', 'transferencias_origen']

class TransferenciasDetalleSerializer(serializers.ModelSerializer):
    origen = serializers.StringRelatedField()
    destino = serializers.StringRelatedField()

    class Meta:
        model = Transferencias
        fields = ['id', 'origen', 'destino', 'cantidad']

class TransferenciasSerializer(serializers.ModelSerializer):
    origen = CuentaSerializer()
    destino = CuentaSerializer()

    class Meta:
        model = Transferencias
        fields = ['id', 'origen', 'cantidad', 'destino']

    def create(self, validated_data):
        origen_data = validated_data.pop('origen')
        destino_data = validated_data.pop('destino')

        origen_instance = Cuenta.objects.get(nombre=origen_data['nombre'])
        destino_instance = Cuenta.objects.get(nombre=destino_data['nombre'])

        transferencia = Transferencias.objects.create(
            origen=origen_instance,
            destino=destino_instance,
            **validated_data
        )

        return transferencia
