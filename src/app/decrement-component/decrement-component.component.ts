import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrement-component',
  templateUrl: './decrement-component.component.html',
  styleUrls: ['./decrement-component.component.scss']
})
export class DecrementComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  decrement(){
    console.log('decrement');
  }
}
