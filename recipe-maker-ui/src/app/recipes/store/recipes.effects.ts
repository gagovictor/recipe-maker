import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { RecipeService } from '../services/recipe.service';
import * as RecipeActions from './recipes.actions';
import * as fromIngredients from './recipes.selectors';

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store
  ) {
  }

  // queryRecipeOnIngredientChange$ = createEffect(() => {
  //   return  this.actions$.pipe(
  //     ofType(
  //       RecipeActions.addIngredient,
  //       RecipeActions.removeIngredient
  //     ),
  //     withLatestFrom(this.store.pipe(select(fromIngredients.selectIngredients))),
  //     switchMap(([action, ingredients]) => {
  //       console.log(`action`, action);
  //       console.log(`ingredients`, ingredients);
  //       return this.recipeService.queryRecipes(ingredients as string[]).pipe(
  //         map(response => RecipeActions.queryRecipeSuccess({ recipes: response.data.getRecipes })),
  //         catchError(error => of(RecipeActions.queryRecipeFailure({ error })))
  //       );
  //     })
  //   )
  // });
}
