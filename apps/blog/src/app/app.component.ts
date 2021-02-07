import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ilnur-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {
    http.get('https://console.firebase.google.com/project/tasks-11f98/database/tasks-11f98-default-rtdb/data/~2Ftasks').subscribe(console.log)
  }
}
