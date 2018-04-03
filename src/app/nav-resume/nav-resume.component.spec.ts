import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResumeComponent } from './nav-resume.component';

describe('NavResumeComponent', () => {
  let component: NavResumeComponent;
  let fixture: ComponentFixture<NavResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
