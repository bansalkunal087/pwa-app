import { Component,OnInit } from '@angular/core';
import * as action from './store/app.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    users: any = [];
  constructor(private store: Store<any>){

  }

  ngOnInit(){

    this.store.select('counter').subscribe((data)=>{

        console.log(data);
        
        if(data.users)
        this.users = data.users;
    })

    this.store.dispatch(new action.GetUsers());
  }
}
