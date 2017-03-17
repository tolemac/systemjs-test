import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
  <a routerLink="./lazy">lazy</a>
  <router-outlet></router-outlet>`,
})
export class AppComponent { name = 'Angular'; }
