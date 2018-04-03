import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProjetsComponent } from './nav-projets.component';

describe('NavProjetsComponent', () => {
  let component: NavProjetsComponent;
  let fixture: ComponentFixture<NavProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
