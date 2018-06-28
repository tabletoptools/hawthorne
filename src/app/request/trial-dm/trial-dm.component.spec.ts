import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialDmComponent } from './trial-dm.component';

describe('TrialDmComponent', () => {
  let component: TrialDmComponent;
  let fixture: ComponentFixture<TrialDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialDmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
