import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ListsService} from '../../../services/lists/lists.service';
@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.scss']
})
export class AddIngredientsComponent implements OnInit {

  ingredientsList: any;
  cookingMethodsList: any;
  ingredients: Array<any> = [];
  newIngredient = {};

  @Output() add = new EventEmitter();

  constructor(private listService: ListsService) {
  }

  ngOnInit() {
    this.listService.loadIngredientsList().subscribe(ingredients => {
      this.ingredientsList = ingredients;
    });
    this.listService.loadCookingMethods().subscribe(cookingMethods => {
      this.cookingMethodsList = cookingMethods;
    });
  }

  reset() {
    this.newIngredient = {};
  }


}
