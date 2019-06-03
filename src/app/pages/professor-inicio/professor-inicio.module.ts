import { ProfessorInicioRoutingModule } from './professor-inicio-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorInicioPage } from './professor-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorInicioRoutingModule
  ],
  declarations: [ProfessorInicioPage]
})
export class ProfessorInicioPageModule {}
