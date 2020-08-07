import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertformComponent } from './alertform.component';

describe('AlertformComponent', () => {
  let component: AlertformComponent;
  let fixture: ComponentFixture<AlertformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
