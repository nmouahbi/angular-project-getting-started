import { EventDetailsComponent } from "./events/event-details/event-details.component"
import { EventListComponenet } from "./events/event-list.component"
import  { Routes } from "@angular/router"


export const appRoutes:Routes = [
    { path: 'events', component: EventListComponenet },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '' , redirectTo: '/events', pathMatch: 'full' }
]