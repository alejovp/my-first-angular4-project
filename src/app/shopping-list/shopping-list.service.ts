import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  onIngredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.onIngredientsChange.emit(this.ingredients.slice());
  }

  deleteIng(name: string) {
    this.ingredients = this.ingredients.filter(
      (elem: Ingredient) => elem.name !== name
    );
    this.onIngredientsChange.emit(this.ingredients.slice());
  }

  onIngsToShopping(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.onIngredientsChange.emit(this.ingredients.slice());
  }
  
}