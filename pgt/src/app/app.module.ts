import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { CommonModule } from '@angular/common';  // Importando CommonModule

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Adicionando FormsModule
    CommonModule  // Adicionando CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
