import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  onIngredientsChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.onIngredientsChange.next(this.ingredients.slice());
  }

  deleteIng(name: string) {
    this.ingredients = this.ingredients.filter(
      (elem: Ingredient) => elem.name !== name
    );
    this.onIngredientsChange.next(this.ingredients.slice());
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.onIngredientsChange.next(this.ingredients.slice());
  }
  
}