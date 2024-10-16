import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { LocationsComponent } from './locations/locations.component';
import { UsersComponent } from './users/users.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

@NgModule({
    declarations: [
        MaintenanceComponent,
        UsersComponent,
        SuppliersComponent,
        LocationsComponent,
        UsersComponent,
        SuppliersComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports:[
        UsersComponent,
        SuppliersComponent,
        LocationsComponent,
    ]
})
export class MaintenanceModule { }
