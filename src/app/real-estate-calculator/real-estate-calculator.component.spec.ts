import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateCalculatorComponent } from './real-estate-calculator.component';

describe('RealEstateCalculatorComponent', () => {
  let component: RealEstateCalculatorComponent;
  let fixture: ComponentFixture<RealEstateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
