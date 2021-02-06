import { Component, OnInit } from '@angular/core';
import { RegisterStore } from '../register.store';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ilnur-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('looks') as FormGroup

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

}
