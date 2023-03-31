import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp2IMGComponent } from './temp2-img.component';

describe('Temp2IMGComponent', () => {
  let component: Temp2IMGComponent;
  let fixture: ComponentFixture<Temp2IMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp2IMGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temp2IMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
