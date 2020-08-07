import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanalertComponent } from './loanalert.component';

describe('LoanalertComponent', () => {
  let component: LoanalertComponent;
  let fixture: ComponentFixture<LoanalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
