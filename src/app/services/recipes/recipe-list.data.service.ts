import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private recipeList = new BehaviorSubject([]);

  currentRecipeList = this.recipeList.asObservable();

  constructor() {
  }

  setRecipeList(recipeList) {
    this.recipeList.next(recipeList);
  }

  updateList(recipeDetail) {
    this.currentRecipeList.subscribe(recipes => {
      recipes.forEach(recipe => {
        if (recipe['id'] === recipeDetail.id) {
          recipe.name = recipeDetail.name;
        }
      });
    });
  }
}
