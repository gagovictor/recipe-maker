import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addIngredient } from '../../store/recipes.actions';

@Component({
  selector: 'app-ingredient-input',
  templateUrl: './ingredient-input.component.html',
  styleUrls: ['./ingredient-input.component.scss']
})
export class IngredientInputComponent {

  public ingredient: string = '';

  constructor(private store: Store) {}

  addIngredient() {
    if (this.ingredient.trim()) {
      this.store.dispatch(addIngredient({ ingredient: this.ingredient.trim() }));
      this.ingredient = '';
    }
  }
}
