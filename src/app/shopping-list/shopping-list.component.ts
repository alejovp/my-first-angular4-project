import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient(eventIng: Ingredient) {
    this.ingredients.push(eventIng);
  }

  deleteIng(eventName: string) {
    console.log(eventName);
    this.ingredients = this.ingredients.filter(
      (elem) => elem.name !== eventName
    );
  }
}