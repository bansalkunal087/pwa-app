// counter.reducer.ts
import * as CounterActions from './app.action';
// import { State } from '@ngrx/store';

export type Action = CounterActions.All;

export const IntialState = {
    'asdas': 3243,
    'ada': 13
}

export function counter(state:any = IntialState, action: Action) {
    switch (action.type) {


        case CounterActions.INCREMENT: {
            console.log('232');

            return Object.assign({}, ...state, {'sd':1});
        }

       

        default: {
            return state;
        }
    }

};
