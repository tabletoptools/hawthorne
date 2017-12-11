import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SessionFormComponent} from './session-form/session-form.component';
import {ActivityFormComponent} from './activity-form/activity-form.component';
import {ActivityPanelComponent} from './activity-panel/activity-panel.component';
import {
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {ActivityService} from "./activity.service";
import { NewActivityComponent } from './new-activity/new-activity.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { ActivityComponent } from './activity/activity.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const ROUTE_CONFIG: Routes = [
    {
        path: 'activities',
        component: ActivityComponent,
        children: [
            {
                path: 'list',
                component: ActivityPanelComponent
            },
            {
                path: 'new',
                component: NewActivityComponent
            },
            {
                path: 'edit/:id',
                component: EditActivityComponent
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
    ActivityComponent
  ],
  imports: [
    BrowserModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
      FormsModule, MatSelectModule, MatAutocompleteModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
      MatListModule,
      MatCardModule, RouterModule.forRoot(ROUTE_CONFIG)
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
