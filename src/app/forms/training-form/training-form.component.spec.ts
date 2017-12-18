import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingFormComponent} from './training-form.component';
import {IMPORTS} from "../../app.module";

describe('TrainingFormComponent', () => {
    let component: TrainingFormComponent;
    let fixture: ComponentFixture<TrainingFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [TrainingFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrainingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
