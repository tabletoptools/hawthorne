import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellcastingFormComponent } from './spellcasting-form.component';

describe('SpellcastingFormComponent', () => {
  let component: SpellcastingFormComponent;
  let fixture: ComponentFixture<SpellcastingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellcastingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellcastingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
