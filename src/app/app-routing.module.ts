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
  { path: 'aluno-atividade-abrir/turma/:turma', loadChildren: './pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' },
  { path: 'aluno-resposta/:id', loadChildren: './pages/aluno-resposta/aluno-resposta.module#AlunoRespostaPageModule' },
  { path: 'professor-atividade', loadChildren: './pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
  { path: 'professor-atividade-criacao', loadChildren: './pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
  { path: 'professor-atividade-edicao/:id', loadChildren: './pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
  { path: 'professor-resposta', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/:id', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-resposta/questao/:questao', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
  { path: 'professor-atividade-apresentacao/turma/:turma', loadChildren: './pages/professor-atividade-apresentacao/professor-atividade-apresentacao.module#ProfessorAtividadeApresentacaoPageModule' },
  { path: 'professor-questao', loadChildren: './pages/professor-questao/professor-questao.module#ProfessorQuestaoPageModule' },
  { path: 'professor-questao/:id', loadChildren: './pages/professor-questao/professor-questao.module#ProfessorQuestaoPageModule' },
  { path: 'professor-questao/atividade/:atividade', loadChildren: './pages/professor-questao/professor-questao.module#ProfessorQuestaoPageModule' },
  { path: 'professor-questao-edicao/:id', loadChildren: './pages/professor-questao-edicao/professor-questao-edicao.module#ProfessorQuestaoEdicaoPageModule' },
  { path: 'professor-turma/atividade/:atividade', loadChildren: './pages/professor-turma/professor-turma.module#ProfessorTurmaPageModule' },
  { path: 'professor-turma-edicao/:id', loadChildren: './pages/professor-turma-edicao/professor-turma-edicao.module#ProfessorTurmaEdicaoPageModule' },
  { path: 'professor-atividade-apresentacao-turma/atividade/:atividade', loadChildren: './pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.module#ProfessorAtividadeApresentacaoTurmaPageModule' },
  { path: 'professor-atividade-apresentacao-ranking/turma/:turma', loadChildren: './pages/professor-atividade-apresentacao-ranking/professor-atividade-apresentacao-ranking.module#ProfessorAtividadeApresentacaoRankingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
