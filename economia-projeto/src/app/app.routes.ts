import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
 {
    path: '',
    component: PaginaInicialComponent
 }, 
 {
    path: 'formulario',
   component: FormularioComponent
 },
 {
    path: 'pagina-principal',
    component:PaginaPrincipalComponent
 }
];
