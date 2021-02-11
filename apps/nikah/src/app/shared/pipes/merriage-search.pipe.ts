import {Pipe, PipeTransform} from '@angular/core'
import { User } from '../users';

@Pipe({
  name: 'pipeMerriage'
})
export class MerriageSearchPipe implements PipeTransform {
  transform(users: User[], search: string = ''): User[] {
    if(!search.trim()) {
      return users
    }

    return users.filter(user => {
      return user.marriage.includes(search)
    })
  }
}
