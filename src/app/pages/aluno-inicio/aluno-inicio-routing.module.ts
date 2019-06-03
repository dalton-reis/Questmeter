import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs-aluno', pathMatch: 'full' },
  // { path: 'tabs-aluno', loadChildren: './tabs-aluno/tabs-aluno.module#TabsAlunoPageModule' },
  { path: 'tabs-aluno', loadChildren: 'src/app/tabs-aluno/tabs-aluno.module#TabsAlunoPageModule' },
  { path: 'aluno-atividade-codigo', loadChildren: 'src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule' },
  { path: 'aluno-atividade', loadChildren: 'src/app/pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule' },
  { path: 'aluno-perfil', loadChildren: 'src/app/pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule' },
  { path: 'aluno-atividade-abrir/:codigo', loadChildren: 'src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' }
  // { path: 'aluno-atividade-codigo', loadChildren: './pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule' },
  // { path: 'aluno-atividade', loadChildren: './pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule' },
  // { path: 'aluno-perfil', loadChildren: './pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule' },
  // { path: 'aluno-atividade-abrir/:codigo', loadChildren: './pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlunoInicioRoutingModule {}
