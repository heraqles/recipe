import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../services/recipes/recipe.model';
import {Ingredients} from '../../../services/recipes/ingredients.model';
import {Params, ActivatedRoute} from '@angular/router';
import {RecipesService} from '../../../services/recipes/recipes.service';
import {IngredientService} from '../../../services/recipes/ingredient.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail: Recipe;
  toggle: boolean;
  ingredients: Ingredients;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private ingredientService: IngredientService) {
    this.toggle = true;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeService.loadRecipe(params['id']).subscribe(recipe => this.recipeDetail = recipe);
      this.ingredientService.loadIngedtients(params['id']).subscribe(ingredients => this.ingredients = ingredients);
    });
  }

  toggleAction() {
    this.toggle = !this.toggle;
  }

}
