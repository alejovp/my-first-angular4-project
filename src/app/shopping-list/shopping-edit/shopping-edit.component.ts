// import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  // Here i get the local references in the template using
  // a function for name and using VIewChild for amount
  @ViewChild('amountInput') amountInput:ElementRef;

  // Now this will be manage by the shopping-list-service
  // @Output() onNewIngredient = new EventEmitter<Ingredient>();
  // @Output() onDelIngredient = new EventEmitter<string>();

  constructor(private slService: ShoppingListService) { 

  }

  ngOnInit() {
  }

  // Now this will be manage by the shopping-list-service
  // addNewIngredient(name: HTMLInputElement) {
  //   this.onNewIngredient.emit(
  //     new Ingredient(name.value, this.amountInput.nativeElement.value)
  //   );
  // }

  addNewIngredient(name: HTMLInputElement) {
    this.slService.addIngredient(
      new Ingredient(name.value, this.amountInput.nativeElement.value)
    );
  }

  // Now this will be manage by the shopping-list-service
  // deleteIng(name: HTMLInputElement) {
  //   this.onDelIngredient.emit(name.value);
  // }

  deleteIng(name: HTMLInputElement) {
    this.slService.deleteIng(name.value);
  }

  clearForm(name: HTMLInputElement) {
    name.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
