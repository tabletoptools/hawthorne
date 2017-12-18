import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCharacterComponent} from './new-character.component';
import {IMPORTS} from "../../app.module";

describe('NewCharacterComponent', () => {
    let component: NewCharacterComponent;
    let fixture: ComponentFixture<NewCharacterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [NewCharacterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewCharacterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
