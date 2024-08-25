import { createAction, props } from '@ngrx/store';

export const addIngredient = createAction(
  '[Recipe] Add Ingredient',
  props<{ ingredient: string }>()
);

export const removeIngredient = createAction(
  '[Recipe] Remove Ingredient',
  props<{ ingredient: string }>()
);

export const queryRecipesSuccess = createAction(
  '[Recipe] Query Recipes Success',
  props<{ recipes: any[] }>()
);

export const queryRecipesFailure = createAction(
  '[Recipe] Query Recipes Failure',
  props<{ error: any }>()
);