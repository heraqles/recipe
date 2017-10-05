import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {List} from './list.model';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class ListsService {
  constructor(private http: HttpClient) {
  }
  loadIngredientsList() {
    return this.http.get<List>(`${BASE_URL}/ingredient-list`);
  }

  deleteIngredients(ingredients: List) {
    return this.http.delete(`${BASE_URL}/ingredient-list/${ingredients.id}`);
  }

  createIngredient(ingredient: List) {
    return this.http.post(`${BASE_URL}/ingredient-list`, ingredient);
  }


  loadCookingMethods() {
    return this.http.get<List>(`${BASE_URL}/cooking-methods-list`);
  }

  deleteCookingMethod(cookingMethod: List) {
    return this.http.delete(`${BASE_URL}/cooking-methods-list/${cookingMethod.id}`);
  }

  createCookingMethod(cookingMethod: List) {
    return this.http.post(`${BASE_URL}/cooking-methods-list`, cookingMethod);
  }



}


