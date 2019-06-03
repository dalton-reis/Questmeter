import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfessorAtividadePage } from './professor-atividade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProfessorAtividadePage}])
  ],
  declarations: [ProfessorAtividadePage]
})
export class ProfessorAtividadePageModule {}
