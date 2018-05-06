import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  private dbUrl: string = 'https://ng-recipe-book-4a06b.firebaseio.com/';

  constructor(private http: Http, private recipeService: RecipesService) {}

  storeRecipes() {
    return this.http.put(`${this.dbUrl}recipes.json`, this.recipeService.getRecipes());
  }

  getStoredRecipes() {
    return this.http.get(`${this.dbUrl}recipes.json`)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe.ingredients = []
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}