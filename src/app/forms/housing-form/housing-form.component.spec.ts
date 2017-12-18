import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HousingFormComponent} from './housing-form.component';
import {IMPORTS} from "../../app.module";

describe('HousingFormComponent', () => {
    let component: HousingFormComponent;
    let fixture: ComponentFixture<HousingFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [HousingFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HousingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
