import { ActionReducerMap } from '@ngrx/store';
import { RecipeState, recipeReducer } from './recipes/store/recipes.reducer';

export interface AppState {
  recipes: RecipeState;
}

export const reducers: ActionReducerMap<AppState> = {
  recipes: recipeReducer
};
