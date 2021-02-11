import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map, tap } from 'rxjs/operators';
import {User} from '../../shared/users'
import {UserService} from '../../shared/sevices/user.service'

export interface Country {
  id: number,
  name: string,
  cities: any
}

const countries: Country[] = [
  {
    id: 1,
    name: 'Russia',
    cities: [{id: 1, name: 'Moskow'},{id: 2,name: 'Piter'},{id: 3,name: 'Omsk'},{id: 4,name: 'Ufa'}]
  },
  {
    id: 2,
    name: 'Saudia',
    cities: [{id: 1,name: 'Mekka'},{id: 2,name: 'Medina'},{id: 3, name: 'Toif'}]
  },
  {
    id: 3,
    name: 'Egypt',
    cities: [{id: 1,name: 'Kair'},{id: 2,name: 'Alexandria'},{id: 3,name: 'Sheih'}]
  }
]


@Component({
  selector: 'ilnur-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {

  public readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public readonly countries$: BehaviorSubject<any> = new BehaviorSubject<any>(countries);
  public readonly russia$: BehaviorSubject<any> = new BehaviorSubject<any>(countries[0].cities);
  public readonly saudia$: BehaviorSubject<any> = new BehaviorSubject<any>(countries[1].cities);
  public readonly egypt$: BehaviorSubject<any> = new BehaviorSubject<any>(countries[2].cities);

  searchCountry = ''
  searchCity = ''
  searchGender = ''
  searchMerriage = ''
  searchChildren = ''


  constructor(
    private userService: UserService
  ) {
    this.userService.getUsers.subscribe(user => this.users$.next(user))
  }

  ngOnInit(): void {

  }

  public defineGender(e) {
    this.searchGender = e
  }

  public defineMerriage(e) {
    this.searchMerriage = e
  }

  public defineChildren(e) {
    this.searchChildren = e
  }



}
