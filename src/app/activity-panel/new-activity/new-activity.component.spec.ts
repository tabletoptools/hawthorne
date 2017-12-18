import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewActivityComponent} from './new-activity.component';
import {IMPORTS} from "../../app.module";

describe('NewActivityComponent', () => {
    let component: NewActivityComponent;
    let fixture: ComponentFixture<NewActivityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [NewActivityComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
