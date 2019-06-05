import { AlunoInicioRoutingModule } from './aluno-inicio-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoInicioPage } from './aluno-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoInicioRoutingModule
  ],
  declarations: [AlunoInicioPage]
})
export class AlunoInicioPageModule {}
