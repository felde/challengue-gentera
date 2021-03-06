import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MealComponent } from './components/meal/meal.component';
import { MealsComponent } from './components/meals/meals.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'topics/list', component: IngredientsComponent },
  { path: 'meals/list/:topic', component: MealsComponent },
  { path: 'meal/:id', component: MealComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: "welcome" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
