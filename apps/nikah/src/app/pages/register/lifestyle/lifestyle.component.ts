import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RegisterStore } from '../register.store';

const smoking = ['Нет', 'Да', 'Иногда']
const consumptionAlcohol = ['Нет', 'Да', 'Иногда']
const eating = ['Только халяль', 'Все подряд']
const frequencySport = ['Не указано', 'Занимаюсь регулярно', 'Занимаюсь иногда', 'Не занимаюсь спортом']

@Component({
  selector: 'ilnur-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('lifestyle') as FormGroup
  public readonly smoking$: BehaviorSubject<any> = new BehaviorSubject<any>(smoking);
  public readonly consumptionAlcohol$: BehaviorSubject<any> = new BehaviorSubject<any>(consumptionAlcohol);
  public readonly eatings$: BehaviorSubject<any> = new BehaviorSubject<any>(eating);
  public readonly frequencySport$: BehaviorSubject<any> = new BehaviorSubject<any>(frequencySport);

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }


  selectValueChange(field, e) {
    this.form.patchValue({[field]: e})
  }

  public selectValueInputChange(field, e) {
    this.form.patchValue({[field]: e.target.value})
  }

}
