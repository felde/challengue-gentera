import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/access/login' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    component: PagesComponent
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then(m => m.AccessModule),
    component: AccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
