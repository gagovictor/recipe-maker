import { Action, createReducer, on } from '@ngrx/store';
import * as RecipeActions from './recipes.actions';
import { Recipe } from '../models/recipe';

export interface RecipeState {
  ingredients: string[];
  recipes: Recipe[];
  error: any;
}

export const initialState: RecipeState = {
  ingredients: [],
  recipes: [],
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
  })),
  on(RecipeActions.queryRecipesSuccess, (state, { recipes }) => ({
    ...state,
    recipes
  })),
  on(RecipeActions.queryRecipesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function recipeReducer(state: RecipeState = initialState, action: Action) {
  return _recipeReducer(state, action);
}
