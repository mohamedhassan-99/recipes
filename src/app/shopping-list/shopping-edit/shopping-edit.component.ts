import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput')
  nameRef!: ElementRef;
  
  @ViewChild('amountInput')
  amountRef!: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {}

  onAddItem() {
    const name : string = this.nameRef.nativeElement.value;
    const amount : number = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(newIngredient);
  }    
}
