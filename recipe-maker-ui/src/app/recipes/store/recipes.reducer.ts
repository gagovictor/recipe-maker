import { Action, createReducer, on } from '@ngrx/store';
import * as RecipeActions from './recipes.actions';

export interface RecipeState {
  ingredients: string[];
  error: any;
}

export const initialState: RecipeState = {
  ingredients: [],
  error: null
};

const _recipeReducer = createReducer(
  initialState,
  on(RecipeActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [
      ...state.ingredients,
      ingredient
    ]
  })),
  on(RecipeActions.removeIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: state.ingredients.filter(i => i !== ingredient)
  }))
);

export function recipeReducer(state: RecipeState = initialState, action: Action) {
  return _recipeReducer(state, action);
}
