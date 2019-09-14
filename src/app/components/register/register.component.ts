import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
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
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/special"]);
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
          error: err.error.errors.password
        });
        console.log(this);
      }
    );
  }
}
