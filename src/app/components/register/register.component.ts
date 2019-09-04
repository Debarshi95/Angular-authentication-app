import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private fb: FormBuilder) {}
  public registrationForm = this.fb.group({
    firstname: [""],
    lastname: [""],
    email: [""],
    password: [""],
    password_confirmation: [""]
  });
  ngOnInit() {
    console.log(this);
  }
  errors = [];
  registerUser() {
    console.log(this.registrationForm);
    this.authService.registerUser(this.registrationForm.value).subscribe(
      res => console.log(res),
      err => {
        this.errors = err.error.message;
        console.log(this);
      }
    );
  }
}
