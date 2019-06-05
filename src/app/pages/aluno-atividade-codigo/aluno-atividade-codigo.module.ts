import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunoAtividadeCodigoPage } from './aluno-atividade-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoAtividadeCodigoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoAtividadeCodigoPage]
})
export class AlunoAtividadeCodigoPageModule {}
