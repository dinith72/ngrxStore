import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { IncrementComponentComponent } from './increment-component/increment-component.component';
import { DecrementComponentComponent } from './decrement-component/decrement-component.component';
import {MatButtonModule, MatButton} from '@angular/material/button';

import {StoreModule} from '@ngrx/store';
import {CounterReducer} from './reducers/counterReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    }),
    MatButtonModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
