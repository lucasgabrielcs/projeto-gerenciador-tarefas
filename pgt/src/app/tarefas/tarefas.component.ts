import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { CommonModule } from '@angular/common';  // Importando CommonModule

@Component({
  selector: 'app-tarefas',
  standalone: true,  // Definindo o componente como stand-alone
  imports: [CommonModule, FormsModule],  // Importando os módulos necessários
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: { titulo: string, data: string, descricao: string }[] = [];  // Lista de tarefas com título, data e descrição
  novaTarefa: { titulo: string, data: string, descricao: string } = { titulo: '', data: '', descricao: '' }; // Nova tarefa

  // Método para adicionar a tarefa à lista
  adicionarTarefa() {
    if (this.novaTarefa.titulo.trim() && this.novaTarefa.data.trim() && this.novaTarefa.descricao.trim()) {
      this.tarefas.push({ ...this.novaTarefa });  // Adiciona tarefa na lista
      this.novaTarefa = { titulo: '', data: '', descricao: '' }; // Limpa os campos após adicionar
    }
  }
}
