import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeIngredient } from '../../store/recipes.actions';
import { selectIngredients } from '../../store/recipes.selectors';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-ingredient-chip-list',
  templateUrl: './ingredient-chip-list.component.html',
  styleUrls: ['./ingredient-chip-list.component.scss']
})
export class IngredientChipListComponent implements OnInit {
  ingredients$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.ingredients$ = this.store.pipe(select(selectIngredients));
  }

  ngOnInit() {
  }

  removeIngredient(ingredient: string) {
    this.store.dispatch(removeIngredient({ ingredient }));
  }
}
