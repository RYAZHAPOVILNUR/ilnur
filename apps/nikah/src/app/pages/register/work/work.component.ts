import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterStore } from '../register.store';

@Component({
  selector: 'ilnur-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  public readonly form: FormGroup = this.store.form.get('work') as FormGroup

  constructor(
    private readonly store: RegisterStore
  ) { }

  ngOnInit(): void {
  }

}
