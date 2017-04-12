import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  navOption: string;

  showSection(eventHeader: {showRecipes: Boolean, showShoppingList: Boolean}) {
    if (eventHeader.showRecipes) {
      this.navOption = 'showRecipesSection';
    } else {
      this.navOption = 'showShopListSection';
    }
  }

}
