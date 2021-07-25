import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodoItem } from './ITodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  editable = false;

  @Input() todoItem: ITodoItem;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<ITodoItem>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.todoItem.description = description;
  }
}
