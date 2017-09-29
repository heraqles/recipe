import {Component, Input, Output, EventEmitter} from '@angular/core';
import {List} from '../../../services/lists/list.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  newItem = {};
  @Input() list: List[];
  @Input() listName: string;
  @Output() deleted = new EventEmitter();
  @Output() saved = new EventEmitter();

  resetInput() {
    this.newItem = {};
  }
}
