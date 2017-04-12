import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  
  @Output() navOptionSelected = new EventEmitter<{showRecipes: Boolean, showShoppingList: Boolean}>();

  onRecipes() {
    this.navOptionSelected.emit({
      showRecipes: true,
      showShoppingList: false
    });
  }

  onShoppingList() {
    this.navOptionSelected.emit({
      showRecipes: false,
      showShoppingList: true
    });
  }
}