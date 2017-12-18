import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GoldFormComponent} from './gold-form.component';
import {IMPORTS} from "../../app.module";

describe('GoldFormComponent', () => {
    let component: GoldFormComponent;
    let fixture: ComponentFixture<GoldFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [GoldFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoldFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
