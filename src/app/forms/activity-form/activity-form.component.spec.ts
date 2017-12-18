import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivityFormComponent} from './activity-form.component';
import {IMPORTS} from "../../app.module";

describe('ActivityFormComponent', () => {
    let component: ActivityFormComponent;
    let fixture: ComponentFixture<ActivityFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [ActivityFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
