import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../../services/recipes/recipe.model';
@Component({
  selector: 'app-recpies-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent {

  @Input() recipes: Recipe[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  term: string;

  filterList(term: string) {
    this.term = term;
  }

}
