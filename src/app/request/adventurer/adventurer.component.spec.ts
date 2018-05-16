import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerComponent } from './adventurer.component';

describe('AdventurerComponent', () => {
  let component: AdventurerComponent;
  let fixture: ComponentFixture<AdventurerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
