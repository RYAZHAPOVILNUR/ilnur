import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RegisterStore } from '../register.store';

const getNumbers = (length: number) => Array.from({length}, (_, i) => i + 1)

const bodyType = ['Не указано', 'Худощавое', 'Стройное', 'Обычное', 'Спортивное', 'Полное']
const belief = ['Не указано', 'Саляфия', 'Ашаризм', 'Матуридизм', 'Суфизм', 'Затрудняюсь ответить']
const childrens = ['Не указано', 'Можно с детьми', 'Без детей', 'Затрудняюсь ответить']

@Component({
  selector: 'ilnur-spouse',
  templateUrl: './spouse.component.html',
  styleUrls: ['./spouse.component.css']
})
export class SpouseComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('futurespouse') as FormGroup
  public readonly bodyTypes$: BehaviorSubject<any> = new BehaviorSubject<any>(bodyType);
  public readonly beliefs$: BehaviorSubject<any> = new BehaviorSubject<any>(belief);
  public readonly childrens$: BehaviorSubject<any> = new BehaviorSubject<any>(childrens);

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

  get ageOfs(): number[] {
    return getNumbers(100)
  }

  get ageUps(): number[] {
    return getNumbers(100)
  }

  get heightsOfs(): number[] {
    return getNumbers(100)
  }

  get heightsUps(): number[] {
    return getNumbers(100)
  }

  get weightsOfs(): number[] {
    return getNumbers(100)
  }

  get weightsUps(): number[] {
    return getNumbers(100)
  }

  selectValueChange(field, e) {
    console.log(field)
    console.log(e)
    this.form.patchValue({[field]: e})
  }

}
