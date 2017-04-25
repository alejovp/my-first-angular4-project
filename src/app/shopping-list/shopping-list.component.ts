import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
  // Now this will be manage by the shopping-list-service
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit () {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.onIngredientsChange.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  // Now this will be manage by the shopping-list-service
  // addIngredient(eventIng: Ingredient) {
  //   this.ingredients.push(eventIng);
  // }

  // Now this will be manage by the shopping-list-service
  // deleteIng(eventName: string) {
  //   console.log(eventName);
  //   this.ingredients = this.ingredients.filter(
  //     (elem) => elem.name !== eventName
  //   );
  // }
}