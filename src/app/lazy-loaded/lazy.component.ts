import { Component } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-lazy",
  template: `
    <p>Lazy loaded module: {{ userService.userName }}</p>
  `
})
export class LazyComponent {
  constructor(public userService: UserService) {}
}
