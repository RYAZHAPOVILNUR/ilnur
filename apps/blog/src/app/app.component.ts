import { Component } from '@angular/core';

export interface Leanguage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ilnur-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLeanguage: string;

  leanguages: Leanguage[] = [
    {value: 'ru', viewValue: 'RU'},
    {value: 'en', viewValue: 'EN'},
    {value: 'ar', viewValue: 'AR'}
  ];


}
