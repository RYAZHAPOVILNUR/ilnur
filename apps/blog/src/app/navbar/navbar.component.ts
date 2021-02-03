import { Component, OnInit } from '@angular/core';

export interface Language {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'ilnur-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  selectedLanguage: string;

  languages: Language[] = [
    {value: 'ru', viewValue: 'RU'},
    {value: 'en', viewValue: 'EN'},
    {value: 'ar', viewValue: 'AR'}
  ];

  public window
  public sidenav
  public menu

  ngOnInit() {
    this.window = document.getElementById('window')
    this.sidenav = document.getElementById('sidenav')
    this.menu = document.getElementById('menu')
  }

 onToggle() {
   this.window.classList.toggle('show')
   this.sidenav.classList.toggle('sidenav')
 }


}
