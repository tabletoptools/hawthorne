import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivityDialogComponent} from './activity-dialog.component';
import {IMPORTS} from "../../app.module";

describe('ActivityDialogComponent', () => {
    let component: ActivityDialogComponent;
    let fixture: ComponentFixture<ActivityDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [ActivityDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
