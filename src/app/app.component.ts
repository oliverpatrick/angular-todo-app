import { Component } from '@angular/core';
import { ITodoItem } from './todo-item/ITodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get todoItems() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((todoItem) =>
      this.filter === 'done' ? todoItem.done : !todoItem.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  remove(todoItem: ITodoItem) {
    this.allItems.splice(this.allItems.indexOf(todoItem), 1);
  }
}
