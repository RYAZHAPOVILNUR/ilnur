import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ilnur-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  person = {
    id: 3232,
    name: 'Muslim',
    reputation: 40,
    filling: 71
  }

  constructor() {}

  ngOnInit(): void {

  }



}
