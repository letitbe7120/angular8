import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayplanComponent } from './payplan.component';

describe('PayplanComponent', () => {
  let component: PayplanComponent;
  let fixture: ComponentFixture<PayplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
