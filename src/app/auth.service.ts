import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "localhost:8000/api";
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>(`${this.url}/register`, user);
  }
}
