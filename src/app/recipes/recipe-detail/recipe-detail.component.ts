import { RecipeService } from './../recipe.services';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  constructor(private reciepService: RecipeService) {}

  ngOnInit() {}
  onAddToShoppingList(){
     this.reciepService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
