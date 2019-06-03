import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsAlunoPage } from './tabs-aluno.page';
import { TabsAlunoPageRoutingModule } from './tabs-aluno.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsAlunoPageRoutingModule
  ],
  declarations: [TabsAlunoPage]
})
export class TabsAlunoPageModule {}
