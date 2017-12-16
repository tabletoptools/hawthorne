import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawthorneContainerComponent } from './hawthorne-container.component';

describe('HawthorneContainerComponent', () => {
  let component: HawthorneContainerComponent;
  let fixture: ComponentFixture<HawthorneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawthorneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawthorneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
