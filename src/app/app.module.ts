import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {ActivityService} from "./activity.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartsModule} from "ng2-charts";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {HawthorneContainerComponent} from './hawthorne-container/hawthorne-container.component';
import {CharacterService} from "./character.service";
import {PlayerService} from "./player.service";
import {LootService} from "./loot.service";
import { LoginComponent } from './login/login.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationInterceptor} from "./authentication-interceptor";
import {BotService} from "./bot.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { SessionRequestComponent } from './forms/session-request/session-request.component';
import { AdventurerComponent } from './request/adventurer/adventurer.component';
import {RequestService} from "./request.service";
import { TrialDmComponent } from './request/trial-dm/trial-dm.component';

const ROUTE_CONFIG: Routes = [
    {
        path: 'app',
        component: HawthorneContainerComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'request',
                component: RequestComponent,
                children: [
                    {
                        path: 'adventurer',
                        component: AdventurerComponent
                    },
                    {
                        path: 'trialDM',
                        component: TrialDmComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

export const IMPORTS = [
    BrowserModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FormsModule, MatSelectModule, MatAutocompleteModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, ChartsModule, MatDialogModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatCardModule, RouterModule.forRoot(ROUTE_CONFIG, {useHash: true}), ReactiveFormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [], HttpClientModule
];

@NgModule({
    declarations: [
        AppComponent,
        HawthorneContainerComponent,
        LoginComponent,
        UserDisplayComponent,
        DashboardComponent,
        RequestComponent,
        SessionRequestComponent,
        AdventurerComponent,
        TrialDmComponent,
    ],
    imports: [
        BrowserModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
        FormsModule, MatSelectModule, MatAutocompleteModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
        MatListModule, ChartsModule, MatDialogModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule,
        MatCardModule, RouterModule.forRoot(ROUTE_CONFIG, {useHash: true}), ReactiveFormsModule, HttpClientModule, MatGridListModule,
        environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
    ],
    providers: [
        ActivityService,
        CharacterService,
        PlayerService,
        LootService,
        BotService,
        RequestService
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
