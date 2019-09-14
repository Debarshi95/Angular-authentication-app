import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:8000/api";
  httpOptions = new HttpHeaders({
    "X-Requested-With": "XMLHttpRequest"
  });
  constructor(private http: HttpClient) {}

  registerUser(user): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, user, {
      headers: this.httpOptions
    });
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user, {
      headers: this.httpOptions
    });
  }
}
