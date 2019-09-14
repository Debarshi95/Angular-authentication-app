import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

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

  registerUser() {
    console.log(this.registrationForm);

    this.authService.registerUser(this.registrationForm.value).subscribe(
      res => {
        console.log(res), localStorage.setItem("token", res.token);
      },
      err => {
        console.log(err);
        this.registrationForm.controls.firstname.setErrors({
          error: err.error.errors.firstname
        });
        this.registrationForm.controls.lastname.setErrors({
          error: err.error.errors.lastname
        });
        this.registrationForm.controls.email.setErrors({
          error: err.error.errors.email
        });
        this.registrationForm.controls.password.setErrors({
          error: err.error.errors.password
        });
        this.registrationForm.controls.password_confirmation.setErrors({
          error: err.error.errors.password_confirmation
        });
        console.log(this);
      }
    );
  }
}
