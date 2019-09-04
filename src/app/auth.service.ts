import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  registerUser(user): Observable<any> {
    return this.http
      .post<any>(`${this.url}/register`, user)
      .pipe(map(res => res.message));
  }
}
