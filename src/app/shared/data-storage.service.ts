import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recipes.service";


@Injectable()
export class DataStorageService {
  private dbUrl: string = 'https://ng-recipe-book-4a06b.firebaseio.com/';

  constructor(
    // private http: Http,
    // Now using HttpClient...
    private httpClient: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // Using http:
    // return this.http.put(`${this.dbUrl}recipes.json?auth=${token}`, this.recipeService.getRecipes());
    
    // Using httpClient opt1:
    // return this.httpClient.put(`${this.dbUrl}recipes.json?auth=${token}`, this.recipeService.getRecipes());
    
    // Using httpClient opt2 (params):
    // return this.httpClient.put(`${this.dbUrl}recipes.json`, 
    //                             this.recipeService.getRecipes(),
    //                             { params: new HttpParams().set('auth', token)});
    
    // Using httpCLient opt3 (httpRequest):
    const req = new HttpRequest(
                      'PUT', 
                      `${this.dbUrl}recipes.json`, 
                      this.recipeService.getRecipes(),
                      { reportProgress: true, // This option give me info about the progress
                        params: new HttpParams().set('auth', token) });
    
    return this.httpClient.request(req);
  }

  getStoredRecipes() {
    const token = this.authService.getToken();

    // return this.http.get(`${this.dbUrl}recipes.json?auth=${token}`)
    //   .map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe.ingredients = []
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    return this.httpClient.get<Recipe[]>(`${this.dbUrl}recipes.json?auth=${token}`)
      .map(
        // By default HttpCLient get only the body in response and use type JSON (all these can be changed)
        (recipes) => {
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