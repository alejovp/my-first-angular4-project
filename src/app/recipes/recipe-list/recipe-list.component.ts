import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
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
  subscription: Subscription;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.onChangeRecipes
      .subscribe(
        (updatedRecipes: Recipe[]) => {
          this.recipes = updatedRecipes;
        }
      );
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
