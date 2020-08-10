import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { IncrementComponentComponent } from './increment-component/increment-component.component';
import { DecrementComponentComponent } from './decrement-component/decrement-component.component';
// import {MatButtonModule} from '@angular/material/button';

import {StoreModule} from '@ngrx/store';
import {CounterReducer} from './reducers/counterReducer';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    IncrementComponentComponent,
    DecrementComponentComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: CounterReducer
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
