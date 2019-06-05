import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunoRespostaPage } from './aluno-resposta.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoRespostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoRespostaPage]
})
export class AlunoRespostaPageModule {}
