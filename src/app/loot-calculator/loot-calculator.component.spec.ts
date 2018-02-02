import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootCalculatorComponent } from './loot-calculator.component';

describe('LootCalculatorComponent', () => {
  let component: LootCalculatorComponent;
  let fixture: ComponentFixture<LootCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
