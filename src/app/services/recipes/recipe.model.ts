import {Ingredients} from './ingredients.model';
export interface Recipe {
  id: number;
  name: string;
  big_amount: boolean;
  favourite: boolean;
  ingredients: Ingredients;
}
