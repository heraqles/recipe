import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../services/recipes/recipes.service';
import {Recipe} from '../../services/recipes/recipe.model';
@Component({
  selector: 'app-recepies',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: any;
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipesService.loadRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.selectRecipe(this.recipes[0]);
    });
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  deleteRecipe(recipe: Recipe) {
    if (this.confirmDeleting(recipe.name)) {
      this.recipesService.deleteRecipe(recipe).subscribe(() => {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
      });
    }
    return;
  }

  confirmDeleting(name: string) {
    return confirm(`Are You sure you want to delete ${name} recepies`);
  }

}
