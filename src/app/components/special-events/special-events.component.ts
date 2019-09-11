import { Component, OnInit } from "@angular/core";
import { EventsService } from "src/app/events.service";

@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.css"]
})
export class SpecialEventsComponent implements OnInit {
  public specialEvents = [];
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.getSpecialEvents();
  }
  getSpecialEvents() {
    this.eventsService
      .getSpecialEvents()
      .subscribe(
        res => (this.specialEvents = res.data),
        err => console.log(err)
      );
  }
}
