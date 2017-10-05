import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../services/recipes/recipe.model';
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
  editForm = false;
  ingredients: any;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeService.loadRecipe(params['id']).subscribe(recipe => this.recipeDetail = recipe);
      this.ingredientService.loadIngredtients(params['id']).subscribe(ingredients => this.ingredients = ingredients);
    });
  }

  addIngredient(ingredient, id) {
    this.ingredientService.createIngredients(id, ingredient).subscribe(() => {
      console.log('Adding ingredients');
    });
    this.ingredients.push(ingredient);
  }

  editRecipe() {
    this.editForm = true;
  }

  saveRecipe() {
    console.log(this.recipeDetail);
    this.recipeService.updateRecipe(this.recipeDetail).subscribe(() => {
      console.log('Recipe updating');
      this.editForm = false;
    });
  }

}
