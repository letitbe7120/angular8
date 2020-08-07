import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanvendorComponent } from './loanvendor.component';

describe('LoanvendorComponent', () => {
  let component: LoanvendorComponent;
  let fixture: ComponentFixture<LoanvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
