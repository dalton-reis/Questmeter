import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlunoPerfilPage } from './aluno-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoPerfilPage]
})
export class AlunoPerfilPageModule {}
