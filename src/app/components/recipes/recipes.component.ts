import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../services/recipes/recipes.service';
import {Recipe} from '../../services/recipes/recipe.model';
import {DataService} from '../../services/recipes/recipe-list.data.service';
@Component({
  selector: 'app-recepies',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  ingredients: any;

  constructor(private recipesService: RecipesService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.recipesService.loadRecipes().subscribe(recipes => {
      this.dataService.setRecipeList(recipes);
    });

  }

  deleteRecipe(recipe: Recipe) {
    if (this.confirmDeleting(recipe.name)) {
      this.recipesService.deleteRecipe(recipe).subscribe(() => {
        console.log('Delete');
      });
    }
    return;
  }

  confirmDeleting(name: string) {
    return confirm(`Are You sure you want to delete ${name} recepies`);
  }


}
