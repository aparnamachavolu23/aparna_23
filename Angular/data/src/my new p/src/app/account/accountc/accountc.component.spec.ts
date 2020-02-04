import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcComponent } from './accountc.component';

describe('AccountcComponent', () => {
  let component: AccountcComponent;
  let fixture: ComponentFixture<AccountcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
