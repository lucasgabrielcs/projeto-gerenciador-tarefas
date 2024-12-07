# grcapp/views.py

from django.shortcuts import render, redirect
from .models import Tarefa
from .forms import TarefaForm

def listar_tarefas(request):
    tarefas = Tarefa.objects.all()  # Busca todas as tarefas do banco de dados
    return render(request, 'tarefas/listar_tarefas.html', {'tarefas': tarefas})

def criar_tarefa(request):
    if request.method == 'POST':
        form = TarefaForm(request.POST)
        if form.is_valid():
            form.save()  # Salva a nova tarefa no banco de dados
            return redirect('listar_tarefas')  # Redireciona para a lista de tarefas
    else:
        form = TarefaForm()
    return render(request, 'tarefas/criar_tarefa.html', {'form': form})
