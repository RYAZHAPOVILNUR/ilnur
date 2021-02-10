import { Component } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


const religion = ['Ислам', 'Христианство', 'Иудаизм', 'Другое']
const flows = ['Суннизм', 'Шиизм']
const prayers = ['Не совершаю намаз', 'Совершаю только пятничную молитву', 'Совершаю намаз иногда', 'Совершаю обязательные намазы', 'Совершаю обязательные и желательные намазы']
const abstinences = ['Не соблюдаю пост', 'Соблюдаю пост в Рамадан', 'Соблюдаю пост в Рамадан, а также желательные посты', 'Не соблюдаю по уважительной причине']
const pilgrimages = ['Не совершал', 'Совершал хадж', 'Совершал умру', 'Совершал хадж и умру']
const prescriptions = ['Не соблюдаю религиозные предписания', 'Соблюдаю частично', 'Соблюдаю обязательные предписания', 'Соблюдаю обязательные и желательные предписания']
const holidays = ['Не праздную', 'Только исламские', 'Все']
const observe = ['Меньше 1 года', 'От 1 до 3 лет', 'От 3 до 5 лет', 'От 5 до 10 лет', 'Более 10 лет']
const suras  = ['Ни одной', '1-5 сур', '5-20 сур', '20-50 сур', 'Больше 50 сур', 'Хафиз Корана']
const educationReligion = ['Да', 'Нет']


@Component({
  selector: 'ilnur-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent {
  public readonly form: FormGroup = this.store.form.get('religion') as FormGroup
  public readonly religions$: BehaviorSubject<any> = new BehaviorSubject<any>(religion);
  public readonly flows$: BehaviorSubject<any> = new BehaviorSubject<any>(flows);
  public readonly prayers$: BehaviorSubject<any> = new BehaviorSubject<any>(prayers);
  public readonly abstinences$: BehaviorSubject<any> = new BehaviorSubject<any>(abstinences);
  public readonly pilgrimages$: BehaviorSubject<any> = new BehaviorSubject<any>(pilgrimages);
  public readonly prescriptions$: BehaviorSubject<any> = new BehaviorSubject<any>(prescriptions);
  public readonly holidays$: BehaviorSubject<any> = new BehaviorSubject<any>(holidays);
  public readonly observes$: BehaviorSubject<any> = new BehaviorSubject<any>(observe);
  public readonly suras$: BehaviorSubject<any> = new BehaviorSubject<any>(suras);
  public readonly educationReligions$: BehaviorSubject<any> = new BehaviorSubject<any>(educationReligion);


  constructor(
    private readonly store: RegisterStore
  ) { }


  selectValueChange(field, e) {
    this.form.patchValue({[field]: e})
  }

  public selectValueInputChange(field, e) {
    this.form.patchValue({[field]: e.target.value})
  }
}
