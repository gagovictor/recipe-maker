import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipeState } from './recipes.reducer';

const selectRecipeState = createFeatureSelector<RecipeState>('recipes');

export const selectIngredients = createSelector(
  selectRecipeState,
  (state: RecipeState) => state.ingredients
);
