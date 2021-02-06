import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterStore } from '../register.store';

@Component({
  selector: 'ilnur-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('lifestyle') as FormGroup

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

}
