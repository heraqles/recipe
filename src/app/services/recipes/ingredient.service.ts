import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Ingredients} from './ingredients.model';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) {
  }

  loadIngedtients(id) {
    return this.http.get<Ingredients>(`${BASE_URL}/recipes/${id}/ingredients`);
  }

  createIngredients(id, ingredient: any) {
    return this.http.post(`${BASE_URL}/recipes/${id}/ingredients`, ingredient);
  }

}
