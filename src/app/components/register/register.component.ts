import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registrationForm = {};
  constructor() {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registrationForm);
  }
}
