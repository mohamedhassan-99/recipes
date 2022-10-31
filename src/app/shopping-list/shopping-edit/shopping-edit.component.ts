import { ShoppingService } from './../shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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



  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {}

  onAddItem() {
    const name : string = this.nameRef.nativeElement.value;
    const amount : number = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.shoppingService.addIngredient(newIngredient);

  }
}
