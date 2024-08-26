import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.reducer';

const selectRecipeState = (state: AppState) => state.recipes;

export const selectIngredients = createSelector(
  selectRecipeState,
  (recipeState) => recipeState.ingredients
);

export const selectRecipes = createSelector(
  selectRecipeState,
  (recipeState) => recipeState.recipes
);

export const selectError = createSelector(
  selectRecipeState,
  (recipeState) => recipeState.error
);