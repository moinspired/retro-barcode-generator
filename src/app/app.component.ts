import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['#3CB371', '#B8860B', '#8B0000'];
  randomVal = Math.floor(Math.random() * 2);
  numbers = [1,2,3,4,5]
}
