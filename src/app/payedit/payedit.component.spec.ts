import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeditComponent } from './payedit.component';

describe('PayeditComponent', () => {
  let component: PayeditComponent;
  let fixture: ComponentFixture<PayeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
