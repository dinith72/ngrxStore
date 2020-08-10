import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementComponentComponent } from './decrement-component.component';

describe('DecrementComponentComponent', () => {
  let component: DecrementComponentComponent;
  let fixture: ComponentFixture<DecrementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecrementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecrementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
