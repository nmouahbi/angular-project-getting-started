import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListComponenet } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponenet,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],

  bootstrap: [AppComponent]
})
export class AppModule { }
