import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorTurmaEdicaoPage } from './professor-turma-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorTurmaEdicaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorTurmaEdicaoPage]
})
export class ProfessorTurmaEdicaoPageModule {}
