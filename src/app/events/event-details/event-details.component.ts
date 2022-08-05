import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    selector: "event-details",
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent {
    event:any
    constructor( @Inject(String) private eventService:EventService, private route:ActivatedRoute) { 

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
    }
}
