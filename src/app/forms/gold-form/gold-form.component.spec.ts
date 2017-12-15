import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldFormComponent } from './gold-form.component';

describe('GoldFormComponent', () => {
  let component: GoldFormComponent;
  let fixture: ComponentFixture<GoldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
