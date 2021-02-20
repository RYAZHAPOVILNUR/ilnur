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
  public todos

  constructor(private firestore: AngularFirestore) {
    this.obtainingTodo()
  }
  public get collection(): AngularFirestoreCollection<TodoInterface> {
    return this.firestore.collection(COLLECTION_NAME)
  }

  obtainingTodo() {
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

  getTodo(): Observable<TodoInterface[]> {
    return this.todos
  }

  updateTodo(data): void {
    this.firestore.doc(`${COLLECTION_NAME}/${data.id}`).update(data)
  }

  addTodo(data): void {
    this.collection.add(data)
  }

  deleteTodo(id): void {
    this.firestore.doc(`${COLLECTION_NAME}/${id}`).delete()
  }
}

