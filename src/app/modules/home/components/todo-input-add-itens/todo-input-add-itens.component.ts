import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emitItemTasklist = new EventEmitter();

  public TaskList?: string;
  constructor() {}

  ngOnInit(): void {}

  public addTaskList() {
    this.TaskList = this.TaskList?.trim();
    if (this.TaskList) {
      this.emitItemTasklist.emit(this.TaskList);
      this.TaskList = '';
    }
  }
}
