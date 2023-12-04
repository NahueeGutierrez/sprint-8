from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields=['id', 'username', 'password', 'email','fecha_nacimiento']
    
    def crearUsuario(self, validated_data):
        user=Usuario(
            email=validated_data['email'],
            username=validated_data['username'],
            fecha_nacimiento=validated_data['fecha_nacimiento']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user