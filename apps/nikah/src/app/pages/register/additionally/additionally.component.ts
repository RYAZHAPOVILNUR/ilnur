import { Component } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


const housing = ['Не указано', 'Собственная квартира', 'Собственный дом', 'Съемная квартира', 'Съемный дом', 'Общежитие', 'Другое']
const relocation = ['Не указано', 'Возможен', 'Возможен в пределах страны', 'Возможен в пределах региона', 'Возможен в пределах города или населенного пункта', 'Переезд невозможен', 'Затрудняюсь ответить' ]
const adoptingChildren = ['Не указано', 'Возможно', 'Невозможно', 'Затрудняюсь ответить' ]
const polygamy = ['Не указано', 'Намерен жениться на одной', 'Намерен жениться на нескольких', 'Затрудняюсь ответить' ]

@Component({
  selector: 'ilnur-additionally',
  templateUrl: './additionally.component.html',
  styleUrls: ['./additionally.component.css']
})
export class AdditionallyComponent {
  public readonly form: FormGroup = this.store.form.get('additionally') as FormGroup
  public readonly housings$: BehaviorSubject<any> = new BehaviorSubject<any>(housing);
  public readonly relocations$: BehaviorSubject<any> = new BehaviorSubject<any>(relocation);
  public readonly adoptingChildrens$: BehaviorSubject<any> = new BehaviorSubject<any>(adoptingChildren);
  public readonly polygamys$: BehaviorSubject<any> = new BehaviorSubject<any>(polygamy);


  constructor(
    private readonly store: RegisterStore
  ) { }

  selectValueChange(field, e) {
    this.form.patchValue({[field]: e})
  }

}
