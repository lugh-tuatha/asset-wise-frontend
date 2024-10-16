import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AssetsModule } from './assets/assets.module';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceModule } from './maintenance/maintenance.module';

@NgModule({
    declarations: [AppComponent, DashboardComponent, LoginComponent,],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        BrowserAnimationsModule, 
        SharedModule, 
        DashboardModule,
        MaterialModule,
        AssetsModule,
        HttpClientModule,
        MaintenanceModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
