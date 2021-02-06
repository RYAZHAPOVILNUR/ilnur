import { Component, OnInit } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ilnur-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.css']
})
export class CommonInfoComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('commonInfo') as FormGroup
  public readonly countries$: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      id: 1,
      label: 'Россия'
    },
    {
      id: 2,
      label: 'Египет'
    }
  ])
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

  pu

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

  changeCity(e) {
    console.log({e})
    this.form.patchValue(e.target.value, {
      onlySelf: true,
      emitEvent: false
    })
  }

}
