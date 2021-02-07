import { Component, OnInit } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';

const getNumbers = (length: number) => Array.from({length}, (_, i) => i + 1)

@Component({
  selector: 'ilnur-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent {
  public readonly form: FormGroup = this.store.form.get('looks') as FormGroup

  constructor(
    private readonly store: RegisterStore
  ) { }

  get weights(): number[] {
    return getNumbers(100)
  }

  get heights(): number[] {
    return getNumbers(220)
  }

}
