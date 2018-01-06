import { Component, OnInit, NgZone } from '@angular/core';
import * as action from './store/app.action';
import { Store } from '@ngrx/store';
declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    someProperty;
    users: any = [];
    constructor(private store: Store<any>, private zone: NgZone) {

    }

    ngOnInit() {

        this.store.select('counter').subscribe((data) => {

            console.log(data);

            if (data.users)
                this.users = data.users;
        })

        let uluru = { lat: -25.363, lng: 131.044 };
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        })

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(-25.363, 131.044),
            map: map,
            title: 'Title of a marker'
        });
        marker.addListener('click', () => {

       
                this.someProperty = Math.random();
       

        });

        // this.store.dispatch(new action.GetUsers());
    }
}
