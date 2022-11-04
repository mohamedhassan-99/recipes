import { RecipeService } from './../recipe.services';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  id !: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeDetail(this.id);
    });
  }
  onAddToShoppingList(){
     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  getRecipeDetails(index:number){
    this.recipe = this.recipeService.getRecipeDetail(index);
  }
}
