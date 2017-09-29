import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

const BASE_URL = 'http://localhost:3000/recipes';

@Injectable()
export class RecipesService {

  constructor(private http: HttpClient) {
  }


  loadRecipes() {
    return this.http.get<Recipe>(BASE_URL);
  }

  loadRecipe(id) {
    return this.http.get<Recipe>(`${BASE_URL}/${id}`);
  }

  deleteRecipe(recipe: Recipe) {
    return this.http.delete(`${BASE_URL}/${recipe.id}`);
  }

  createRecipe(recipe: any) {
    return this.http.post(`${BASE_URL}`, recipe);
  }

}
