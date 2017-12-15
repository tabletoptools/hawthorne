import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SessionFormComponent} from './forms/session-form/session-form.component';
import {ActivityFormComponent} from './forms/activity-form/activity-form.component';
import {ActivityPanelComponent} from './activity-panel/activity-panel.component';
import {
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {ActivityService} from "./activity.service";
import {NewActivityComponent} from './new-activity/new-activity.component';
import {EditActivityComponent} from './edit-activity/edit-activity.component';
import {ActivityComponent} from './activity/activity.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CraftingFormComponent} from './forms/crafting-form/crafting-form.component';
import {HousingFormComponent} from './forms/housing-form/housing-form.component';
import {GoldFormComponent} from './forms/gold-form/gold-form.component';
import {ChartsModule} from "ng2-charts";
import {TrainingFormComponent} from './forms/training-form/training-form.component';
import {TravelFormComponent} from './forms/travel-form/travel-form.component';
import {SpellcastingFormComponent} from './forms/spellcasting-form/spellcasting-form.component';
import {ActivityDialogComponent} from './activity-dialog/activity-dialog.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";

const ROUTE_CONFIG: Routes = [
    {
        path: 'activities',
        component: ActivityComponent,
        children: [
            {
                path: 'list',
                component: ActivityPanelComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'activities/list'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        SessionFormComponent,
        ActivityFormComponent,
        ActivityPanelComponent,
        NewActivityComponent,
        EditActivityComponent,
        ActivityComponent,
        CraftingFormComponent,
        HousingFormComponent,
        GoldFormComponent,
        TrainingFormComponent,
        TravelFormComponent,
        SpellcastingFormComponent,
        ActivityDialogComponent
    ],
    imports: [
        BrowserModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
        FormsModule, MatSelectModule, MatAutocompleteModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
        MatListModule, ChartsModule, MatDialogModule, MatMenuModule,
        MatCardModule, RouterModule.forRoot(ROUTE_CONFIG, {useHash: true}),
        environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
    ],
    providers: [ActivityService],
    bootstrap: [AppComponent],
    entryComponents: [ActivityDialogComponent]
})
export class AppModule {
}
