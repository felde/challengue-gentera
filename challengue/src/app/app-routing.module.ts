import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages/welcome' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/welcome.module').then(m => m.WelcomeModule),
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
