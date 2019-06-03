import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorAtividadeEdicaoPage } from './professor-atividade-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorAtividadeEdicaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorAtividadeEdicaoPage]
})
export class ProfessorAtividadeEdicaoPageModule {}
