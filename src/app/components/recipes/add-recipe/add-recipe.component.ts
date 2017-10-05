import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../../services/recipes/recipes.service';
import {IngredientService} from '../../../services/recipes/ingredient.service';
import {Router} from '@angular/router';
import {Ingredients} from '../../../services/recipes/ingredients.model';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  newRecipe: Object;
  ingredients: Ingredients[];
  recipes: any;

  constructor(private recipesService: RecipesService,
              private ingredientService: IngredientService,
              private router: Router) {
    this.ingredients = [];
    this.newRecipe = {};
  }

  ngOnInit() {
    this.recipesService.loadRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.newRecipe['id'] = this.setId();
    });
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

  saveNewRecipe() {
    // this.newRecipe['ingredients'] = this.ingredients;
    this.recipesService.createRecipe(this.newRecipe).subscribe(() => {
      this.ingredientService.createIngredients(this.newRecipe['id'], this.ingredients).subscribe(() => {
        console.log('Adding ingredients');
      });
      this.router.navigate(['']);
    });
  }

  private setId() {
    const idArray: Array<number> = this.recipes.map(item => item.id);
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
