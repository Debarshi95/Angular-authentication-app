import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  private url: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}
  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.url}/events`);
  }
}
