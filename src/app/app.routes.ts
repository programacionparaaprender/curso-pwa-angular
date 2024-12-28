import { Routes } from '@angular/router';
import { CadastroSegurosComponent } from './presentation/cadastro-seguros/cadastro-seguros.component';
import { ListarSegurosComponent } from './presentation/listar-seguros/listar-seguros.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro' },
  { path: 'cadastro', component: CadastroSegurosComponent },
  { path: 'listar', component: ListarSegurosComponent },
];
