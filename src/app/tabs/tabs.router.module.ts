import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'professor-atividade',
        children: [
          {
            path: '',
            loadChildren: '../pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule'
          }
        ]
      },
      {
        path: 'professor-perfil',
        children: [
          {
            path: '',
            loadChildren: '../pages/professor-perfil/professor-perfil.module#ProfessorPerfilPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/professor-atividade',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/professor-atividade',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
