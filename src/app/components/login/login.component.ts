import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  loginUser() {
    console.log(this);
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => console.log(res),
      err => {
        this.loginForm.setErrors({
          error: err.error
        });
        this.loginForm
          .get("email")
          .setErrors({ errors: err.error.errors.email });
        this.loginForm
          .get("password")
          .setErrors({ errors: err.error.errors.password });
        console.log(this, err);
      }
    );
  }
}
