import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsAlunoPage } from './tabs-aluno.page';

const routes: Routes = [
  {
    path: 'tabs-aluno',
    component: TabsAlunoPage,
    children: [
      {
        path: 'aluno-atividade-codigo',
        children: [
          {
            path: '',
            loadChildren: '../pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule'
          }
        ]
      },
      {
        path: 'aluno-atividade',
        children: [
          {
            path: '',
            loadChildren: '../pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule'
          }
        ]
      },
      {
        path: 'aluno-perfil',
        children: [
          {
            path: '',
            loadChildren: '../pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs-aluno/aluno-atividade-codigo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs-aluno/aluno-atividade-codigo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsAlunoPageRoutingModule {}

