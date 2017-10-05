import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() name: string;
  links = {
    home: ['home'],
    recipes: ['recipes/details/1'],
    lists: ['/lists'],
    navigation: ['/table-navigation']
  };
}
