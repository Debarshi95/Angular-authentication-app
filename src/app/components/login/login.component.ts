import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  loginUser() {
    console.log(this);
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/special"]);
      },
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
