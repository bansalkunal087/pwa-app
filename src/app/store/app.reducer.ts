// counter.reducer.ts
import * as Users from './app.action';
// import { State } from '@ngrx/store';

export type Action = Users.All;

export const IntialState = {
    'users': null
}

export function counter(state:any = IntialState, action: Action) {
    switch (action.type) {


        case Users.GET_USERS: {
            return Object.assign({}, ...state);
        }

        case Users.GET_USERS_SUCCESS: {
            return Object.assign({}, ...state, {users: action.payload});
        }

       

        default: {
            return state;
        }
    }

};
