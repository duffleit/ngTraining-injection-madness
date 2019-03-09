import { Component } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-eager",
  template: `
    <p>Eager loaded module: {{ userService.userName }}</p>
  `
})
export class EagerComponent {
  constructor(public userService: UserService) {}
}
