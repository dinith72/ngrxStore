import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-component',
  templateUrl: './increment-component.component.html',
  styleUrls: ['./increment-component.component.scss']
})
export class IncrementComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Increment(){
    console.log('increment');
  }

}
