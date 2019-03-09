import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Hi {{userService.userName}}, please go to the eager, or lazy-loaded sub-module.</p>
  `,
})
export class RootComponent { 
  constructor(public userService: UserService){}
}
