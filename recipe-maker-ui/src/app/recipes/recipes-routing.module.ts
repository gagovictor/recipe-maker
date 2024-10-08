import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeQueryComponent } from './components/recipe-query/recipe-query.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', component: RecipeQueryComponent },
  { path: 'details/:id', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
