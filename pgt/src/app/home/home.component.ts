import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <button class="btn btn-primary" (click)="navigateToTarefas()">Iniciar</button>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToTarefas() {
    this.router.navigate(['/tarefas']);
  }
}
