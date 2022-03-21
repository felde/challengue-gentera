import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MealsComponent } from './components/meals/meals.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'topics/list', component: IngredientsComponent },
  { path: 'meals/list/:topic', component: MealsComponent },
  { path: '**', redirectTo: "welcome" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
