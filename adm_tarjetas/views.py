from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.utils.decorators import method_decorator
from django.views import View
import json

from .models import AumentoLimite

@method_decorator(csrf_exempt, name='dispatch')
class AumentoLimiteView(View):
    @require_POST
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        usuario_id = kwargs.get('usuario_id')
        monto_solicitado = data.get('monto_solicitado')

        AumentoLimite.objects.create(usuario_id=usuario_id, monto_solicitado=monto_solicitado)

        return JsonResponse({'mensaje': f'Solicitud recibida para el usuario con ID {usuario_id}. Se procesará pronto.'})


