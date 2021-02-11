import {Pipe, PipeTransform} from '@angular/core'
import { User } from '../users';

@Pipe({
  name: 'pipeCountry'
})
export class CountrySearchPipe implements PipeTransform {
  transform(users: User[], search: string = ''): User[] {
    if(!search.trim()) {
      return users
    }

    return users.filter(user => {
      return user.country.includes(search)
    })
  }
}
