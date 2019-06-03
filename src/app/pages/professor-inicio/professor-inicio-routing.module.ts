import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'professor-atividade', loadChildren: './pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
  // { path: 'professor-atividade-criacao', loadChildren: './pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
  // { path: 'professor-atividade-edicao/:id', loadChildren: './pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
  // { path: 'professor-perfil', loadChildren: './pages/professor-perfil/professor-perfil.module#ProfessorPerfilPageModule' },
  // { path: 'professor-resposta', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  // { path: 'professor-resposta/:id', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  // { path: 'professor-resposta/atividade/:atividade', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' }
  { path: 'tabs', loadChildren: 'src/app/tabs/tabs.module#TabsPageModule' },
  { path: 'professor-atividade', loadChildren: 'src/app/pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
  { path: 'professor-atividade-criacao', loadChildren: 'src/app/pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
  { path: 'professor-atividade-edicao/:id', loadChildren: 'src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
  { path: 'professor-perfil', loadChildren: 'src/app/pages/professor-perfil/professor-perfil.module#ProfessorPerfilPageModule' },
  { path: 'professor-resposta', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/:id', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/atividade/:atividade', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfessorInicioRoutingModule {}
