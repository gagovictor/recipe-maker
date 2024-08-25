import { createAction, props } from '@ngrx/store';

export const addIngredient = createAction(
  '[Recipe] Add Ingredient',
  props<{ ingredient: string }>()
);

export const removeIngredient = createAction(
  '[Recipe] Remove Ingredient',
  props<{ ingredient: string }>()
);

export const queryRecipe = createAction(
  '[Recipe] Query Recipe'
);

export const queryRecipeSuccess = createAction(
  '[Recipe] Query Recipe Success',
  props<{ recipes: any[] }>() // TODO type response
);

export const queryRecipeFailure = createAction(
  '[Recipe] Query Recipe Failure',
  props<{ error: any }>()
);
