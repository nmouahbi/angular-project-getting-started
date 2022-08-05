import { Component,Input, Output ,EventEmitter} from '@angular/core';

@Component({ 
    selector: 'event-thumbnail',
    template: ` 
    <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
       <div>Date: {{event.date}}</div>
       <div>Time: {{event.time}}</div>
       <div>Price: \${{event.price}}</div>
       <div>
           <span>Location: {{event.location.address}}</span>
           <span class="pad-left"></span>
           <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
    
     </div>
     `,
    styles: [`
        .pad-left {margin-left: 10px;}
        .thumbnail {min-height: 210px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: any

    // handleClickMe() {
    //     this.eventClick.emit(this.event.name);
    // }

    // event = {
    //     id: 1,
    //     name: 'Angular Connect',
    //     date: '9/26/2036',
    //     time: '10:00 am',
    //     price: 599.99,
    //     imageUrl: '/assets/images/test.jpg',
    //     location: {
    //         address: '1057 DT',
    //         city: 'London',
    //         country: 'England'
    //     }
    // }
}