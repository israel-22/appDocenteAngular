import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData, addDoc, doc,updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  push(response: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: Firestore) { }

  getTodos(): Observable<Todo[]> {

const todoRef = collection(this.firestore, 'todos');

return collectionData(todoRef, { idField: 'id' }) as Observable<Todo[]>
  }

  addTodo(todo: Todo): Promise<any> {

    const todoRef = collection(this.firestore, 'todos');

    return addDoc(todoRef, todo);
  }

  updateTodo({ id, title, completed }: Todo): Promise<any> {
    const todoRef = doc(this.firestore, `todos/${id}`);
    return updateDoc(todoRef, {title,completed });
  }

  deleteTodo(id: string): Promise<any> {
    const todoRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(todoRef);
  }
}
