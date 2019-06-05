import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorAtividadeApresentacaoTurmaPage } from './professor-atividade-apresentacao-turma.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorAtividadeApresentacaoTurmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorAtividadeApresentacaoTurmaPage]
})
export class ProfessorAtividadeApresentacaoTurmaPageModule {}
