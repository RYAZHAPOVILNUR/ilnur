import { Component } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const countries = [
  {
    id: 1,
    label: 'Россия'
  },
  {
    id: 2,
    label: 'Египет'
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
      label:  'Санкт-Петербург'
    },
    {
      id: 2,
      label: 'Каир'
    }
  ])

  public readonly nationalities$: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      id: 1,
      label:  'Башкир'
    },
    {
      id: 2,
      label: 'Казах'
    }
  ])


  constructor(
    private readonly store: RegisterStore
  ) { }

  changeCity(e) {
    console.log({e})
    this.form.patchValue(e.target.value, {
      onlySelf: true,
      emitEvent: false
    })
  }

  test() {
    console.log(this.form.value)
  }


  selectValueChange(field, e) {
    this.form.patchValue({[field]: e.id})
  }
}
