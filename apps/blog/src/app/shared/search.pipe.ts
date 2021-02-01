import {Pipe, PipeTransform} from '@angular/core'
import {Todo} from '../demos-todo/demos-todo.component'

@Pipe({
  name: 'searchTodo'
})
export class SearchPipe implements PipeTransform {
  transform(todos: Todo[], search = ''): Todo[] {
    if(!search.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
