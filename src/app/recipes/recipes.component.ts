import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;

  constructor(private recipesService: RecipesService) { 
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => { this.currentRecipe = recipe}
    );
  }

  ngOnInit() {
  }

  // Now using recipes service this will be 
  // displayDetails(eventRecipe: Recipe) {
  //   this.currentRecipe = eventRecipe;
  // }
}
