import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TodoInterface } from "../../types/todoTypes/todo.interface";

const COLLECTION_NAME = 'tasks'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Observable<TodoInterface[]>

  constructor(private firestore: AngularFirestore) {
    this.getTodos()
  }

  public get collection(): AngularFirestoreCollection<TodoInterface> {
    return this.firestore.collection(COLLECTION_NAME)
  }

  public getTodos() {
    this.todos = this.collection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((action) =>
          ({
            ...action.payload.doc.data(),
            id: action.payload.doc.id
          })
        )
      )
    )
  }

  public updateTodo(data): void {
    this.firestore.doc(`${COLLECTION_NAME}/${data.id}`).update(data)
  }

  public addTodo(data): void {
    this.collection.add(data)
  }

  public deleteTodo(id): void {
    this.firestore.doc(`${COLLECTION_NAME}/${id}`).delete()
  }
}

