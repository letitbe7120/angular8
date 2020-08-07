import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteditComponent } from './alertedit.component';

describe('AlerteditComponent', () => {
  let component: AlerteditComponent;
  let fixture: ComponentFixture<AlerteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
