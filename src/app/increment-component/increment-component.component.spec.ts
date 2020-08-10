import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementComponentComponent } from './increment-component.component';

describe('IncrementComponentComponent', () => {
  let component: IncrementComponentComponent;
  let fixture: ComponentFixture<IncrementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
