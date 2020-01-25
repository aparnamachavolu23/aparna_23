import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signh1Component } from './signh1.component';

describe('Signh1Component', () => {
  let component: Signh1Component;
  let fixture: ComponentFixture<Signh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
