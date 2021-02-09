import { Component } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const countries = [
  {
    id: 1,
    name: 'Россия'
  },
  {
    id: 2,
    name: 'Египет'
  }
]

@Component({
  selector: 'ilnur-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.css']
})
export class CommonInfoComponent {
  public readonly form: FormGroup = this.store.form.get('commonInfo') as FormGroup
  public readonly countries$: BehaviorSubject<any> = new BehaviorSubject<any>(countries);

  public readonly cities$: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      id: 1,
      name:  'Санкт-Петербург'
    },
    {
      id: 2,
      name: 'Каир'
    }
  ])

  public readonly nationalities$: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      id: 1,
      name:  'Башкир'
    },
    {
      id: 2,
      name: 'Казах'
    }
  ])


  constructor(
    private readonly store: RegisterStore
  ) { }


  selectValueChange(field, e) {
    console.log(field)
    console.log(e)
    this.form.patchValue({[field]: e})
  }
}
