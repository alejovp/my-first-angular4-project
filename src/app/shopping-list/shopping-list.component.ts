import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit () {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.onIngredientsChange.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }
  
  onEditItem(index: number) {
    this.shoppingListService.onIngredientEdit.next(index);
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}