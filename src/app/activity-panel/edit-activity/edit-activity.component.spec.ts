import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditActivityComponent} from './edit-activity.component';
import {IMPORTS} from "../../app.module";

describe('EditActivityComponent', () => {
    let component: EditActivityComponent;
    let fixture: ComponentFixture<EditActivityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [EditActivityComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
