import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {Decrement} from '../actions/CounterActions';

@Component({
  selector: 'app-decrement-component',
  templateUrl: './decrement-component.component.html',
  styleUrls: ['./decrement-component.component.scss']
})
export class DecrementComponentComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  decrement(){
    console.log('decrement');
    this.store.dispatch(new Decrement());
  }
}
