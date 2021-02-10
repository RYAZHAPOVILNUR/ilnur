import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RegisterStore } from '../register.store';

const education = ['Не указано', 'Начальное', 'Среднее', 'Среднее неполное', 'Профессиональное училище', 'Высшее', 'Высшее неполное', 'Несколько высших', 'Нет образования']
const employment = ['Не указано', 'Полная', 'Частичная', 'Не работаю', 'Самозанятость', 'На пенсии', 'Другое']
const financial = ['Не указано', 'Не имею постоянного дохода', 'Прожиточный минимум', 'Среднее', 'Обеспеченный']
const languages = ['Абхазский', 'Авадхи', 'Аварский', 'Агем', 'Адангме']

@Component({
  selector: 'ilnur-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('work') as FormGroup
  public readonly educations$: BehaviorSubject<any> = new BehaviorSubject<any>(education);
  public readonly employments$: BehaviorSubject<any> = new BehaviorSubject<any>(employment);
  public readonly financials$: BehaviorSubject<any> = new BehaviorSubject<any>(financial);
  public readonly languages$: BehaviorSubject<any> = new BehaviorSubject<any>(languages);

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }


  public selectValueChange(field, e) {
    this.form.patchValue({[field]: e})
  }

  public selectValueInputChange(field, e) {
    this.form.patchValue({[field]: e.target.value})
  }


}
