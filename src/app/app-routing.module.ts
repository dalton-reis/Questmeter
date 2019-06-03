import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'abertura', pathMatch: 'full' },
  { path: 'abertura', loadChildren: './pages/abertura/abertura.module#AberturaPageModule' },
  { path: 'autenticacao/:tipo', loadChildren: './pages/autenticacao/autenticacao.module#AutenticacaoPageModule' },
  { path: 'autenticacao-criar-conta/:tipo', loadChildren: './pages/autenticacao-criar-conta/autenticacao-criar-conta.module#AutenticacaoCriarContaPageModule' },
  { path: 'autenticacao-resetar-senha', loadChildren: './pages/autenticacao-resetar-senha/autenticacao-resetar-senha.module#AutenticacaoResetarSenhaPageModule' },
  { path: 'aluno-inicio', loadChildren: './pages/aluno-inicio/aluno-inicio.module#AlunoInicioPageModule' },
  { path: 'professor-inicio', loadChildren: './pages/professor-inicio/professor-inicio.module#ProfessorInicioPageModule' },
  { path: 'aluno-atividade', loadChildren: './pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule' },
  { path: 'aluno-atividade-abrir/:codigo', loadChildren: './pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' },
  { path: 'aluno-resposta/:id', loadChildren: './pages/aluno-resposta/aluno-resposta.module#AlunoRespostaPageModule' },
  { path: 'professor-atividade', loadChildren: './pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
  { path: 'professor-atividade-criacao', loadChildren: './pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
  { path: 'professor-atividade-edicao/:id', loadChildren: './pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
  { path: 'professor-resposta', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/:id', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/atividade/:atividade', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-atividade-apresentacao/:atividade', loadChildren: './pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module#ProfessorAtividadeApresentacaoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
