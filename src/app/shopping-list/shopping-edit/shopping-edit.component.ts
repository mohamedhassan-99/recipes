import { ShoppingService } from './../shopping-list.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingListForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;
  constructor(private shoppingService: ShoppingService) {}
  
  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(
        this.editedItemIndex,
        newIngredient
        );
      } else {
        this.shoppingService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();
    }
    
    onClear() {
      this.shoppingListForm.reset();
      this.editMode = false;
    }

    onDelete() {
      this.onClear();
      this.shoppingService.deleteIngredient(this.editedItemIndex);
    }
      

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
  