import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kud-two';
  proprtybinding:string ="this text loaded from veriable(proprtybinding)";
  interpolation:string ="this text loaded from veriable(interpolation)";
}
