import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {Increment} from '../actions/CounterActions';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-increment-component',
  templateUrl: './increment-component.component.html',
  styleUrls: ['./increment-component.component.scss']
})
export class IncrementComponentComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  Increment(){
    console.log('increment');
    this.store.dispatch(new Increment(5));
  }

}
