import {Component, OnInit} from '@angular/core';
import {ListsService} from '../../services/lists/lists.service';
import {List} from '../../services/lists/list.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  ingredients: any;
  cookingMethods: any;

  constructor(private listService: ListsService) {
  }

  ngOnInit() {
    this.listService.loadIngredientsList().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
    this.listService.loadCookingMethods().subscribe(cookingMethods => {
      this.cookingMethods = cookingMethods;
    });
  }

  deleteIngredient(ingredient: List) {
    if (this.confirmDeleting(ingredient.name)) {
      this.listService.deleteIngredients(ingredient).subscribe(() => {
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
      });
    }
    return;
  }

  saveIngredient(ingredient: List) {
    ingredient.id = this.setId();
    this.listService.createIngredient(ingredient).subscribe(() => {
      this.ingredients.push(ingredient);
    });
  }

  deleteCookingMethod(cookingMethod: List) {
    if (this.confirmDeleting(cookingMethod.name)) {
      this.listService.deleteCookingMethod(cookingMethod).subscribe(() => {
        this.cookingMethods.splice(this.cookingMethods.indexOf(cookingMethod), 1);
      });
    }
    return;
  }

  saveCookingMethod(cookingMethod: List) {
    cookingMethod.id = this.setId();
    this.listService.createCookingMethod(cookingMethod).subscribe(() => {
      this.cookingMethods.push(cookingMethod);
    });
  }

  confirmDeleting(name: string) {
    return confirm(`Are You sure you want to delete ${name} recepies`);
  }

  private setId() {
    const idArray: Array<number> = this.ingredients.map(item => item.id);
    const id: number = this.getRandomNumber();
    if (!(idArray.indexOf(id) >= 0)) {
      return id;
    }
    this.setId();
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

}
