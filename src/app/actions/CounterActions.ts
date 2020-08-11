import { Action } from '@ngrx/store';
import {CounterEnum} from '../actionEnum';




// each of the action classes for action action type
export class Increment implements Action {
 readonly type = CounterEnum.INCREMENT;
 constructor(public payload: number) {}
}

export class Decrement implements Action{
    readonly type = 'DECREMENT';
    constructor(){}
}