# grcapp/admin.py

from django.contrib import admin
from .models import Tarefa

admin.site.register(Tarefa)  # Registra o modelo Tarefa para aparecer no admin
