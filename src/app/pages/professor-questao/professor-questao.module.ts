import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorQuestaoPage } from './professor-questao.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorQuestaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorQuestaoPage]
})
export class ProfessorQuestaoPageModule {}
