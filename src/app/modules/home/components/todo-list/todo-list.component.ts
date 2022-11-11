import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStore();
  }

  public deleteItemofList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm('Tem certeza que deseja apagar tudo? ');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEventEmit(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      let confirm = window.confirm('Tem certeza que deseja apagar? ');

      if (confirm) {
        this.deleteItemofList(index);
      }
    }
  }

  public setLocalStore() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      ),
        localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
