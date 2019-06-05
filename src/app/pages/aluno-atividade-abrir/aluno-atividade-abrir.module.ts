import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunoAtividadeAbrirPage } from './aluno-atividade-abrir.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoAtividadeAbrirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoAtividadeAbrirPage]
})
export class AlunoAtividadeAbrirPageModule {}
