import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Input() placeholderText: string;
  @Output() addText = new EventEmitter();

}
