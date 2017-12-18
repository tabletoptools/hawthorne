import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterDialogComponent} from './character-dialog.component';
import {IMPORTS} from "../../app.module";

describe('CharacterDialogComponent', () => {
    let component: CharacterDialogComponent;
    let fixture: ComponentFixture<CharacterDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [CharacterDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
