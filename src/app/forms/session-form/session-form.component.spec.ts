import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SessionFormComponent} from './session-form.component';
import {IMPORTS} from "../../app.module";

describe('SessionFormComponent', () => {
    let component: SessionFormComponent;
    let fixture: ComponentFixture<SessionFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [SessionFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
