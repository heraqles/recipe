import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from '../../../services/recipes/recipe.model';
import {Router} from '@angular/router';
import {DataService} from '../../../services/recipes/recipe-list.data.service';
@Component({
  selector: 'app-recpies-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {

  recipes: Recipe[];
  @Output() deleted = new EventEmitter();
  term: string;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService.currentRecipeList.subscribe(recipes => this.recipes = recipes);
  }

  updateList(recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
    this.router.navigate(['recipes/details/1']);
  }

  goTo(id){
    this.router.navigate(['recipes/details', id]);
  }

  filterList(term: string) {
    this.term = term;
  }

}
