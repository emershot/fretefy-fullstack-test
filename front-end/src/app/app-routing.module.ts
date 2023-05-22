import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiaoComponent } from './regiao/regiao.component';
import { CadastroRegiaoComponent } from './cadastro-regiao/cadastro-regiao.component';
import { EdicaoRegiaoComponent } from './edicao-regiao/edicao-regiao.component';

const routes: Routes = [
  { path: 'regioes', component: RegiaoComponent },
  { path: 'cadastro', component: CadastroRegiaoComponent },
  { path: 'editar/:nome', component: EdicaoRegiaoComponent },
  { path: '', redirectTo: '/regioes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
