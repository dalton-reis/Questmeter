import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorAtividadeApresentacaoRankingPage } from './professor-atividade-apresentacao-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorAtividadeApresentacaoRankingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorAtividadeApresentacaoRankingPage]
})
export class ProfessorAtividadeApresentacaoRankingPageModule {}
