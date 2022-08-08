import { EventListComponenet } from "./events/event-list.component"
import  { Routes } from "@angular/router"


export const appRoutes:Routes = [
    { path: 'events', component: EventListComponenet },
    { path: '' , redirectTo: '/events', pathMatch: 'full' }
]