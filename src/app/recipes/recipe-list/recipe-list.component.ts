import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Now the event is emitted in the recipes service
  //@Output() recipeSelected = new EventEmitter<Recipe>();

  // This moved to the recipes service.
  // recipes: Recipe[] = [
  //   new Recipe('A Test recipe', 'This is simple a Test', 
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg'),
  //   new Recipe('A Test recipe', 'This is simple a Test', 
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg')
  // ];

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  showDetail(recipeElem: Recipe) {
    this.recipesService.recipeSelected.emit(recipeElem);
  }

}
