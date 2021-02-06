import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterStore } from './register.store';

@Component({
  selector: 'ilnur-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterStore]
})
export class RegisterComponent implements OnInit {
  public readonly form: FormGroup = this.store.form;

  constructor(
    private readonly store: RegisterStore
  ) {
  }

  ngOnInit(): void {

  }

}
