import { Component } from '@angular/core';
import { TodosService, Todo } from '../../services/todos/todos.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  Todos: Todo[] = [];
  form: FormGroup;

  constructor(private todosService: TodosService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      completed: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.Todos = todos;
    });
  }

  addTodo(): void {
    if (this.form.invalid) return;
    const todo = this.form.value;
    this.todosService.addTodo(todo)
      .then((response) => {
        this.Todos.push(response); // Agregar el nuevo todo a la lista
        this.form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateTodo(todo: Todo): void {
    const newTodo = { id: todo.id, ...this.form.value };
    this.todosService.updateTodo(newTodo)
      .then((response) => {
        const index = this.Todos.findIndex((todo) => todo.id === todo.id);
        if (index !== -1) {
          this.Todos[index] = response; // Actualizar la lista local de Todos
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteTodo(id: string): void {
    this.todosService.deleteTodo(id)
    .then(()=>{
      this.Todos = this.Todos.filter(todo => todo.id !== id);
    })
    .catch((error)=>console.log(error));
}
}

       
          
  

 
  
      
