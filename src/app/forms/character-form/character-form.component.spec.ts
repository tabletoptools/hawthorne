import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterFormComponent} from './character-form.component';
import {IMPORTS} from "../../app.module";

describe('CharacterFormComponent', () => {
    let component: CharacterFormComponent;
    let fixture: ComponentFixture<CharacterFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [CharacterFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
