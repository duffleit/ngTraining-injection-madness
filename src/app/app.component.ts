import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button routerLink="/">Root</button>
    <button routerLink="/lazy">Lazy</button>
    <button routerLink="/eager">Eager</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
