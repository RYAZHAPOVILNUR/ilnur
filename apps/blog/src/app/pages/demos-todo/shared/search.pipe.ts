import {Pipe, PipeTransform} from '@angular/core'
import { TodoInterface } from '../types/todo.interface'

@Pipe({
  name: 'searchTodo'
})
export class SearchPipe implements PipeTransform {
  transform(todos: TodoInterface[], search = ''): TodoInterface[] {
    if(!search.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
