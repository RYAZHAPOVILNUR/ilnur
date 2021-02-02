import {Injectable} from '@angular/core'
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from '../users';
import { users } from '../users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = users
  public currentUser = this.users.filter( user => {
    return user.id === 1
  })

  public getUsers(): Observable<User[]> {
    return of(this.users)
  }

  public getCurrentUser(): Observable<User> {
    return of(this.currentUser[0])
  }
}
