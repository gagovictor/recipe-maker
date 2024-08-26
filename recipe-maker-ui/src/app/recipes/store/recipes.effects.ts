import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { RecipeService } from '../services/recipe.service';
import * as RecipeActions from './recipes.actions';
import * as fromIngredients from './recipes.selectors';
import { AppState } from '../../app.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) {}

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.addIngredient, RecipeActions.removeIngredient),
      withLatestFrom(this.store.pipe(select(fromIngredients.selectIngredients))),
      switchMap(([action, ingredients]) =>
        this.recipeService.queryRecipes(ingredients).pipe(
          map((recipes) => RecipeActions.queryRecipesSuccess({ recipes })),
          catchError((error: HttpErrorResponse) => {
            console.error(`Error while trying to query recipes: ${error.message}`);
            return of(RecipeActions.queryRecipesFailure({ error: 'Failed to query recipes. Please try again later.' }));
          })
        )
      )
    )
  );
}
