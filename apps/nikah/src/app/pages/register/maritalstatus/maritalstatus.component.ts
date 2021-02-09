import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RegisterStore } from '../register.store';

const getNumbers = (length: number) => Array.from({length}, (_, i) => i + 1)

const status = ['Не был в браке', 'Женат на одной', 'Женат на двух', 'Женат на трех', 'Разведен', 'Вдовец']
const liveparents = ['Не указано', 'Да', 'Нет', 'Другое']
const desiredchildrens = ['Не указано', 'Не планирую', 'Хочу одного ребенка', 'Хочу двух детей', 'Хочу троих детей', 'Хочу много детей', 'Затрудняюсь ответить']

@Component({
  selector: 'ilnur-maritalstatus',
  templateUrl: './maritalstatus.component.html',
  styleUrls: ['./maritalstatus.component.css']
})
export class MaritalstatusComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('maritalstatus') as FormGroup
  public readonly maritalStatus$: BehaviorSubject<any> = new BehaviorSubject<any>(status);
  public readonly liveParents$: BehaviorSubject<any> = new BehaviorSubject<any>(liveparents);
  public readonly desiredChildrens$: BehaviorSubject<any> = new BehaviorSubject<any>(desiredchildrens);

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

  get childrens(): number[] {
    return getNumbers(10)
  }


  selectValueChange(field, e) {
    console.log(field)
    console.log(e)
    this.form.patchValue({[field]: e})
  }

}
