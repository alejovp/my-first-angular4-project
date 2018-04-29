import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Now using recipes service this will be 
  // displayDetails(eventRecipe: Recipe) {
  //   this.currentRecipe = eventRecipe;
  // }
}
