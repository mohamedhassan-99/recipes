import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.services';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://recipe-c8b98-default-rtdb.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-c8b98-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((response) => {
        this.recipeService.setRecipes(response);
      });
  }
}
