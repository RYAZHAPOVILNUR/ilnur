import { Component } from '@angular/core';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ilnur-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectedLanguage: string;

  languages: Language[] = [
    {value: 'ru', viewValue: 'RU'},
    {value: 'en', viewValue: 'EN'},
    {value: 'ar', viewValue: 'AR'}
  ];
}
