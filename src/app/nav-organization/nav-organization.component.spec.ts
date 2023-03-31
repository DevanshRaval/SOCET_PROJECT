import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOrganizationComponent } from './nav-organization.component';

describe('NavOrganizationComponent', () => {
  let component: NavOrganizationComponent;
  let fixture: ComponentFixture<NavOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
