import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  // Ask Angualr DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  // newTodo: Todo = new Todo();

  // addTodo() {
  //  this.todoDataService.addTodo(this.newTodo);
  //  this.newTodo = new Todo();
  // }

  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);

  }

  // toggleTodoComplete(todo) {
  //   this.todoDataService.toggleTodoComplete(todo);
  // }

  // removeTodo(todo) {
  //   this.todoDataService.deleteTodoById(todo.id);
  // }
  // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // rename from removeTodo
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
