import { createSelector } from '@ngrx/store';
import { AppState } from '../../core/store/app.reducer';

const selectRecipeState = (state: AppState) => state.recipes;

export const selectIngredients = createSelector(
  selectRecipeState,
  (recipeState) => recipeState.ingredients
);
