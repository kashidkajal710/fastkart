import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdealComponent } from './topdeal.component';

describe('TopdealComponent', () => {
  let component: TopdealComponent;
  let fixture: ComponentFixture<TopdealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopdealComponent]
    });
    fixture = TestBed.createComponent(TopdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
