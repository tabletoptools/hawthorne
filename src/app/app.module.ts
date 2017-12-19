import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SessionFormComponent} from './forms/session-form/session-form.component';
import {ActivityFormComponent} from './forms/activity-form/activity-form.component';
import {ActivityPanelComponent} from './activity-panel/activity-panel.component';
import {
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule, MatSidenavModule,
    MatSortModule,
    MatTableModule, MatToolbarModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {ActivityService} from "./activity.service";
import {NewActivityComponent} from './activity-panel/new-activity/new-activity.component';
import {EditActivityComponent} from './activity-panel/edit-activity/edit-activity.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CraftingFormComponent} from './forms/crafting-form/crafting-form.component';
import {HousingFormComponent} from './forms/housing-form/housing-form.component';
import {GoldFormComponent} from './forms/gold-form/gold-form.component';
import {ChartsModule} from "ng2-charts";
import {TrainingFormComponent} from './forms/training-form/training-form.component';
import {TravelFormComponent} from './forms/travel-form/travel-form.component';
import {SpellcastingFormComponent} from './forms/spellcasting-form/spellcasting-form.component';
import {ActivityDialogComponent} from './activity-panel/activity-dialog/activity-dialog.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import { HawthorneContainerComponent } from './hawthorne-container/hawthorne-container.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { CharacterDialogComponent } from './character-panel/character-dialog/character-dialog.component';
import {CharacterService} from "./character.service";
import {PlayerService} from "./player.service";
import { CharacterFormComponent } from './forms/character-form/character-form.component';
import { NewCharacterComponent } from './character-panel/new-character/new-character.component';
import { EditCharacterComponent } from './character-panel/edit-character/edit-character.component';
import {AuthorizationComponent} from "./authorization/authorization.component";

const ROUTE_CONFIG: Routes = [
    {
        path: 'app',
        component: HawthorneContainerComponent,
        children: [
            {
                path: 'activities',
                component: ActivityPanelComponent
            },
            {
                path: 'characters',
                component: CharacterPanelComponent
            }
        ]
    },
    {
        path: 'authorize',
        component: AuthorizationComponent
    },
    {
        path: '**',
        redirectTo: '/app/activities'
    }
];

export const IMPORTS = [
    BrowserModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FormsModule, MatSelectModule, MatAutocompleteModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, ChartsModule, MatDialogModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatCardModule, RouterModule.forRoot(ROUTE_CONFIG, {useHash: true}),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
];

export const DECLARATIONS = [
    AppComponent,
    SessionFormComponent,
    ActivityFormComponent,
    ActivityPanelComponent,
    NewActivityComponent,
    EditActivityComponent,
    CraftingFormComponent,
    HousingFormComponent,
    GoldFormComponent,
    TrainingFormComponent,
    TravelFormComponent,
    SpellcastingFormComponent,
    ActivityDialogComponent,
    HawthorneContainerComponent,
    CharacterPanelComponent,
    CharacterDialogComponent,
    CharacterFormComponent,
    NewCharacterComponent,
    EditCharacterComponent,
    AuthorizationComponent
];

export const PROVIDERS = [
    ActivityService,
    CharacterService,
    PlayerService
];

@NgModule({
    declarations: DECLARATIONS,
    imports: IMPORTS,
    providers: PROVIDERS,
    bootstrap: [AppComponent],
    entryComponents: [ActivityDialogComponent, CharacterDialogComponent]
})
export class AppModule {
}
