import { Component} from '@angular/core';

@Component({ 
    selector: 'event-list',
    template: ` 
    <div> 
    <h1 >Event List</h1>
    <hr>
    <event-thumbnail  [event]="event1"></event-thumbnail>
</div>
`,
styles: [`
.pad-left {margin-left: 10px;}
.well div {color: red;}
`]
})

export class EventListComponenet {

    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/test.jpg',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}