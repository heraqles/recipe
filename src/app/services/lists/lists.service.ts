import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {List} from './list.model';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class ListsService {
  constructor(private http: HttpClient) {
  }
  loadIngredientsList() {
    return this.http.get<List>(`${BASE_URL}/ingredients`);
  }

  deleteIngredients(ingredients: List) {
    return this.http.delete(`${BASE_URL}/ingredients/${ingredients.id}`);
  }

  createIngredient(ingredient: List) {
    return this.http.post(`${BASE_URL}/ingredients`, ingredient);
  }


  loadCookingMethods() {
    return this.http.get<List>(`${BASE_URL}/cooking-methods`);
  }

  deleteCookingMethod(cookingMethod: List) {
    return this.http.delete(`${BASE_URL}/cooking-methods/${cookingMethod.id}`);
  }

  createCookingMethod(cookingMethod: List) {
    return this.http.post(`${BASE_URL}/cooking-methods`, cookingMethod);
  }



}


