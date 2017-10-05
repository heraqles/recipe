import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../services/recipes/recipes.service';
import {Recipe} from '../../services/recipes/recipe.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recepies',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: any;
  ingredients: any;

  constructor(private recipesService: RecipesService,
              private router: Router) {
  }

  ngOnInit() {
    this.recipesService.loadRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  deleteRecipe(recipe: Recipe) {
    if (this.confirmDeleting(recipe.name)) {
      this.recipesService.deleteRecipe(recipe).subscribe(() => {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
        this.router.navigate(['recipes/details/1']);
      });
    }
    return;
  }

  confirmDeleting(name: string) {
    return confirm(`Are You sure you want to delete ${name} recepies`);
  }



}
