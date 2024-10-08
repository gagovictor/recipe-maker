import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './services/recipe.service';
import { RecipeQueryComponent } from './components/recipe-query/recipe-query.component';
import { IngredientInputComponent } from './components/ingredient-input/ingredient-input.component';
import { IngredientChipListComponent } from './components/ingredient-chip-list/ingredient-chip-list.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/recipes.effects';
import { RecipeGridComponent } from './components/recipe-grid/recipe-grid.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    RecipeQueryComponent,
    IngredientInputComponent,
    IngredientChipListComponent,
    RecipeGridComponent,
    RecipeCardComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    EffectsModule.forFeature([RecipeEffects]),
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule {}
