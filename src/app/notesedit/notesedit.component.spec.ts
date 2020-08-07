import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteseditComponent } from './notesedit.component';

describe('NoteseditComponent', () => {
  let component: NoteseditComponent;
  let fixture: ComponentFixture<NoteseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
