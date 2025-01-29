import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRecipes from '../../store/recipes.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from '../../../app.reducer';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.scss']
})
export class RecipeGridComponent {
  public recipes$: Observable<Recipe[]>;
  public cols: number = 1;
  private error$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
  ) {
    this.recipes$ = this.store.pipe(select(fromRecipes.selectRecipes));
    this.error$ = this.store.pipe(select(fromRecipes.selectError));

    this.error$.subscribe(error => {
      if (error) {
        this.snackBar.open(`${error}`, 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  }
}
