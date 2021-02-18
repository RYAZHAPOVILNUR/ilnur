import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { TodoInterface } from "../../types/todo.interface";

const COLLECTION_NAME = 'tasks'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private firestore: AngularFirestore) { }
  public get collection(): AngularFirestoreCollection<TodoInterface> {
    return this.firestore.collection(COLLECTION_NAME)
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

