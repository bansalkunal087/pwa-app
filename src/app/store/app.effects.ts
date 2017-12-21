// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action,Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';
import * as Users from './app.action';
export type Action = Users.All;

@Injectable()
export class AppEffects {
    // Listen for the 'LOGIN' action
    @Effect({dispatch: false}) login$: Observable<Action> = this.actions$.ofType(Users.GET_USERS)
    .do((action) =>{

        this.userService.getUserData().subscribe((data)=>{

            console.log(data);
            this.store.dispatch(new Users.GetUsersSuccess(data.data));
        },(error)=>{

            console.log(error);
            
        });

        

    });

    constructor(
        private http: Http,
        private actions$: Actions,
        public store: Store<any>,
        private userService: UserService
    ) { }
}