import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorAtividadeApresentacaoPage } from './professor-atividade-apresentacao.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorAtividadeApresentacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorAtividadeApresentacaoPage]
})
export class ProfessorAtividadeApresentacaoPageModule {}
