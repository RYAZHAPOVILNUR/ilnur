import {Injectable} from '@angular/core'
import { Observable, of } from 'rxjs';
import { User } from '../users';
import { users } from '../users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = users

  public get getUsers(): Observable<User[]> {
    return of(users)
  }

  public get currentUser(): Observable<User> {
    const currentUser = this.users.find(user => user.id === 1)
    return of(currentUser)
  }
}
