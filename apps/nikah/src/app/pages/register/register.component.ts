import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { RegisterStore } from './register.store';

@Component({
  selector: 'ilnur-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterStore]
})
export class RegisterComponent implements OnInit {
  public readonly form: FormGroup = this.store.form;
  public selectedIndex = 0

  constructor(
    private readonly store: RegisterStore
  ) {
  }

  ngOnInit(): void {

  }

  public prevTab() {
    this.selectedIndex = this.selectedIndex - 1
  }

  public nextTab() {
    this.selectedIndex = this.selectedIndex + 1
  }

}
