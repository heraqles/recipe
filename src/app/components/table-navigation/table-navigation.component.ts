import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipesService} from '../../services/recipes/recipes.service';
import {Recipe} from '../../services/recipes/recipe.model';

@Component({
  selector: 'app-table-navigation',
  templateUrl: './table-navigation.component.html',
  styleUrls: ['./table-navigation.component.scss']
})
export class TableNavigationComponent implements OnInit {

  recipes: any;
  order = 'name';
  term: string;

  constructor(private router: Router,
              private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.loadRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  sort(key) {
    this.order = key;
  }

  goTo(id) {
    this.router.navigate(['recipes/details', id]);
  }

}
