import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContactComponent } from './nav-contact.component';

describe('NavContactComponent', () => {
  let component: NavContactComponent;
  let fixture: ComponentFixture<NavContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
