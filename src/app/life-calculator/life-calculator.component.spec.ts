import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCalculatorComponent } from './life-calculator.component';

describe('LifeCalculatorComponent', () => {
  let component: LifeCalculatorComponent;
  let fixture: ComponentFixture<LifeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
