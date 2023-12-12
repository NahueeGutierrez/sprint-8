from django.urls import path
from .views import AumentoLimiteView

urlpatterns = [
    path('aumentar_limite/<str:usuario_id>/', AumentoLimiteView.as_view(), name='aumentar_limite'),
]
