import { Component , OnInit} from '@angular/core';
import { EventService } from './shared/event.service';


@Component({ 
    selector: 'event-list',
    template: ` 
    <div> 
    <h1 >Event List</h1>
    <hr>
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
    <event-thumbnail [event]="event"></event-thumbnail>
    </div>
</div>
`,
styles: [`
.pad-left {margin-left: 10px;}
.well div {color: red;}
`]
})

export class EventListComponenet implements OnInit {

events: any

 constructor( private eventService: EventService, ) { 
  }

    ngOnInit() {
        this.events=this.eventService.getEvents()
    }
  
}