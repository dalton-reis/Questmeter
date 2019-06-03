import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorRespostaPage } from './professor-resposta.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorRespostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorRespostaPage]
})
export class ProfessorRespostaPageModule {}
