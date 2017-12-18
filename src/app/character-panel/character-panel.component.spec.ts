import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterPanelComponent} from './character-panel.component';
import {IMPORTS} from "../app.module";

describe('CharacterPanelComponent', () => {
    let component: CharacterPanelComponent;
    let fixture: ComponentFixture<CharacterPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [CharacterPanelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
