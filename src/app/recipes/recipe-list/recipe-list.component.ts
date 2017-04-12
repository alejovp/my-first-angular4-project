import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simple a Test', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg'),
    new Recipe('A Test recipe', 'This is simple a Test', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  showDetail(recipeElem: Recipe) {
    this.recipeSelected.emit(recipeElem);
  }

}
