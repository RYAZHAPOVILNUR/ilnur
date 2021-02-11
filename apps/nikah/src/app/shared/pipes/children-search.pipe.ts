import {Pipe, PipeTransform} from '@angular/core'
import { User } from '../users';

@Pipe({
  name: 'pipeChildren'
})
export class ChildrenSearchPipe implements PipeTransform {
  transform(users: User[], search: string = ''): User[] {
    if(!search.trim()) {
      return users
    }

    return users.filter(user => {
      return user.children.includes(search)
    })
  }
}
