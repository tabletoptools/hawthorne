import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivityPanelComponent} from './activity-panel.component';
import {IMPORTS} from "../app.module";

describe('ActivityPanelComponent', () => {
    let component: ActivityPanelComponent;
    let fixture: ComponentFixture<ActivityPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: IMPORTS,
            declarations: [ActivityPanelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
