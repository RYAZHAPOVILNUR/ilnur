import { Component } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const getNumbers = (length: number) => Array.from({length}, (_, i) => i + 1)

const bodyType = ['Не указано', 'Худощавое', 'Стройное', 'Обычное', 'Спортивное', 'Полное']
const eyeColor = ['Не указано', 'Карие', 'Голубые', 'Зеленые', 'Серые', 'Черные', 'Янтарные', 'Болотные', 'Гетерохромия', 'Другое' ]
const hairColor = ['Не указано', 'Брюнет', 'Светло-русые', 'Темно-русые', 'Блондин', 'Рыжие', 'Серые', 'Лысый' ]
const facialHair = ['Не указано', 'Борода', 'Усы', 'Борода и усы', 'Щетина', 'Нет', 'После никяха', 'Не могу носить бороду из-за работы', 'Не растет' ]


@Component({
  selector: 'ilnur-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent {
  public readonly form: FormGroup = this.store.form.get('looks') as FormGroup
  public readonly bodyTypes$: BehaviorSubject<any> = new BehaviorSubject<any>(bodyType);
  public readonly eyeColors$: BehaviorSubject<any> = new BehaviorSubject<any>(eyeColor);
  public readonly hairColors$: BehaviorSubject<any> = new BehaviorSubject<any>(hairColor);
  public readonly facialHairs$: BehaviorSubject<any> = new BehaviorSubject<any>(facialHair);


  constructor(
    private readonly store: RegisterStore
  ) { }

  get weights(): number[] {
    return getNumbers(100)
  }

  get heights(): number[] {
    return getNumbers(220)
  }


  selectValueChange(field, e) {
    this.form.patchValue({[field]: e})
  }

}
