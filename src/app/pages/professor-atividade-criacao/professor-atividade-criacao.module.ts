import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfessorAtividadeCriacaoPage } from './professor-atividade-criacao.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorAtividadeCriacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorAtividadeCriacaoPage]
})
export class ProfessorAtividadeCriacaoPageModule {}
