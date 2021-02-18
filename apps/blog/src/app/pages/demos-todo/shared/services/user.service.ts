import {Injectable} from '@angular/core'
import { Observable, of } from 'rxjs';
import { UserInterface } from '../../types/user.interface';
import { users } from '../users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = users

  getUserss(): Observable<UserInterface[]> {
    return of(users)
  }

  public get getUsers(): Observable<UserInterface[]> {
    return of(users)
  }

  public get currentUser(): Observable<UserInterface> {
    const currentUser = this.users.find(user => user.id === 1)
    return of(currentUser)
  }
}
