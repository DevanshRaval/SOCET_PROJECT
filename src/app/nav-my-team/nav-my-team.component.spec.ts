import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMyTeamComponent } from './nav-my-team.component';

describe('NavMyTeamComponent', () => {
  let component: NavMyTeamComponent;
  let fixture: ComponentFixture<NavMyTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMyTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
