import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  registerUser(user) {
    console.log(this.url);
    return this.http.post<any>(`${this.url}/register`, user);
  }
}
