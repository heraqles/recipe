import {Component, Input} from '@angular/core';
import {Recipe} from '../../../services/recipes/recipe.model';
import {Ingredients} from '../../../services/recipes/ingredients.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() selectedRecipe: Recipe;
  toggle: boolean;
  ingredients: Ingredients[];

  constructor() {
    this.toggle = true;
  }

  toggleAction() {
    this.toggle = !this.toggle;
  }

}
