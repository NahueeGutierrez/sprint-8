from django.db import models
from django.contrib.auth.models import AbstractUser
#abstracuser importa los campos de username, email y password sin necesidad de meterlos en el class
# Create your models here.

class Usuario(AbstractUser):
    fecha_nacimiento = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return self.username
