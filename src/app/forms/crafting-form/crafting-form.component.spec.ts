import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CraftingFormComponent} from './crafting-form.component';
import {IMPORTS} from "../../app.module";

describe('CraftingFormComponent', () => {
    let component: CraftingFormComponent;
    let fixture: ComponentFixture<CraftingFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [CraftingFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CraftingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
