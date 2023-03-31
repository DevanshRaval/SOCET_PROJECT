import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp1IMGComponent } from './temp1-img.component';

describe('Temp1IMGComponent', () => {
  let component: Temp1IMGComponent;
  let fixture: ComponentFixture<Temp1IMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp1IMGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temp1IMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
