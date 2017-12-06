import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['#3CB371', '#B8860B', '#8B0000', '#00008B'];
 
  randomizeColors = [this.colors[Math.floor(Math.random() * 3)],
                    this.colors[Math.floor(Math.random() * 3)],
                    this.colors[Math.floor(Math.random() * 3)],
                    this.colors[Math.floor(Math.random() * 3)]]
}
