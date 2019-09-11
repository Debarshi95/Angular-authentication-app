import { Component, OnInit } from "@angular/core";
import { EventsService } from "src/app/events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  events = [];
  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    this.eventsService
      .getEvents()
      .subscribe(res => this.events=res.data, err => console.log(err));
  }
}
