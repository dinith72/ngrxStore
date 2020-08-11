import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  constructor(private store: Store<AppState> ) { }
  value: number = 10;
  ngOnInit(): void {
     this.store.select('counter').subscribe( val => this.value = val);
  }

}
