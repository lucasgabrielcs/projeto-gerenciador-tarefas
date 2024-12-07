# grcapp/models.py

from django.db import models

class Tarefa(models.Model):
    titulo = models.CharField(max_length=100)  # Campo para o título da tarefa
    descricao = models.TextField()  # Campo para a descrição da tarefa
    data_criacao = models.DateTimeField(auto_now_add=True)  # Data de criação
    
    def __str__(self):
        return self.titulo  # Exibe o título da tarefa no admin


