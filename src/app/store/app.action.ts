import { Action } from '@ngrx/store';

export const INCREMENT  = 'Counter_Increment';
export const DECREMENT  = 'Counter_Decrement';
export const RESET      = 'Counter_Reset';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) {}
}

export type All
  = Increment
  | Decrement
  | Reset;