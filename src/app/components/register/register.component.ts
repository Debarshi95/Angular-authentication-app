import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { User } from "src/app/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registrationForm = new User("", "", "", "", "");
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registrationForm);
    this.authService
      .registerUser(this.registrationForm)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
