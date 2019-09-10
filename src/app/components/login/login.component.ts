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
  errors = [];

  loginUser() {
    console.log(this);
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => console.log(res),
      err => {
        this.errors = err.error.message;
        console.log(this.errors);
      }
    );
  }
}
