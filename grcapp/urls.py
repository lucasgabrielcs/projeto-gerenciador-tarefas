# grcapp/urls.py

from django.urls import path
from . import views
from .views import Tarefa

urlpatterns = [
    path('', views.listar_tarefas, name='listar_tarefas'),  # URL para listar as tarefas
    path('criar/', views.criar_tarefa, name='criar_tarefa'),  # URL para criar tarefas
    path('api/tarefas/', Tarefa.as_view(), name='tarefas-list'),
]
