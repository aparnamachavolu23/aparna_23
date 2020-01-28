import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compone1Component } from './compone1.component';

describe('Compone1Component', () => {
  let component: Compone1Component;
  let fixture: ComponentFixture<Compone1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compone1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
