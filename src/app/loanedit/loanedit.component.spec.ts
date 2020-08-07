import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaneditComponent } from './loanedit.component';

describe('LoaneditComponent', () => {
  let component: LoaneditComponent;
  let fixture: ComponentFixture<LoaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
