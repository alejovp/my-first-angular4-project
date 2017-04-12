import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  // Here i get the local references in the template using
  // a function for name and using VIewChild for amount

  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() onNewIngredient = new EventEmitter<Ingredient>();
  @Output() onDelIngredient = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(name: HTMLInputElement) {
    this.onNewIngredient.emit(
      new Ingredient(name.value, this.amountInput.nativeElement.value)
    );
  }

  deleteIng(name: HTMLInputElement) {
    this.onDelIngredient.emit(name.value);
  }

  clearForm(name: HTMLInputElement) {
    name.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
