import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  onIngredientsChange = new Subject<Ingredient[]>();
  onIngredientEdit = new Subject<number>();

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

  deleteIng(index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientsChange.next(this.ingredients.slice());
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.onIngredientsChange.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.onIngredientsChange.next(this.ingredients.slice());
  }
  
}