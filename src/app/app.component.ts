import { CategoryDataService } from './categories/category-data.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from './todos/todo';
import {TodoDataService} from './todos/todo-data.service';
import {Category} from './categories/category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [TodoDataService, CategoryDataService]

})

export class AppComponent implements OnInit {

  newTodo: Todo = new Todo();
  newCategory: Category = new Category();
  selectedCategory: Category;

  constructor(private todoDataService: TodoDataService, private categoryDataService: CategoryDataService) {
  }


  addTodo() {
    this.newTodo.category = this.selectedCategory.id;
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.todos);
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get todosForCat() {
    return this.todoDataService.getTodoByCategory(this.selectedCategory.id);
  }

  countTodosByCat(id: number) {
    return this.todoDataService.getTodoByCategory(id).length;
  }

  addCategory() {
    this.categoryDataService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category: Category) {
    this.categoryDataService.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categoryDataService.getAllCategories();
  }

  categoryById(id: number) {
    return this.categoryDataService.getCategoryById(id);
  }

  addInitialCategory(category: Category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }


  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    let initCat = new Category();
    initCat = {'name' : 'Table 1', 'id' : 1 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Table 2', 'id' : 2 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Table 3', 'id' : 3 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Table 4', 'id' : 4 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Table 5', 'id' : 5 , };
    this.addInitialCategory(initCat);

    let initTodo = new Todo();
    initTodo = {'title' : 'Jenelle Austin', 'complete': false, 'id' : 1 , category: 1 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Kim Stagg', 'complete': false, 'id' : 2 , category: 2 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Amy Moore', 'complete': false, 'id' : 3 , category: 1 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Amy Wilkins', 'complete': false, 'id' : 4 , category: 1 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Jessica Roland', 'complete': false, 'id' : 5 , category: 1 };
    this.addInitialTodo(initTodo);
        initTodo = {'title' : 'James Rea', 'complete': false, 'id' : 6 , category: 2 };
    this.addInitialTodo(initTodo);
        initTodo = {'title' : 'Casey Ramotowski', 'complete': false, 'id' : 7 , category: 3 };
    this.addInitialTodo(initTodo);
        initTodo = {'title' : 'Rachael Feher', 'complete': false, 'id' : 8 , category: 3 };
    this.addInitialTodo(initTodo);
        initTodo = {'title' : 'Amanda Grieshop', 'complete': false, 'id' : 9 , category: 3 };
    this.addInitialTodo(initTodo);
        initTodo = {'title' : 'Ellen Mey', 'complete': false, 'id' : 10 , category: 3 };
    this.addInitialTodo(initTodo);
  }

}