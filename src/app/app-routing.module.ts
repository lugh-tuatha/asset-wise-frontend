import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetsComponent } from './assets/assets.component';
import { HardwareComponent } from './assets/_pages/hardware/hardware.component';
import { LicensesComponent } from './assets/_pages/licenses/licenses.component';
import { HardwareAssetDetailComponent } from './assets/_pages/hardware-asset-detail/hardware-asset-detail.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LocationsComponent } from './maintenance/locations/locations.component';
import { SuppliersComponent } from './maintenance/suppliers/suppliers.component';
import { UsersComponent } from './maintenance/users/users.component';

const routes: Routes = [
    { 
        path: "dashboard", 
        component: DashboardComponent
    },
    {
        path: 'assets',
        component: AssetsComponent, 
        children: [
            { path: 'hardware', component: HardwareComponent },
            { path: 'licenses', component: LicensesComponent },
            { path: 'hardware/:id', component: HardwareAssetDetailComponent },
        ],
    },
    {
        path: 'maintenance',
        component: MaintenanceComponent,
        children: [
            { path: 'users', component: UsersComponent},
            { path: 'suppliers', component: SuppliersComponent },
            { path: 'locations', component: LocationsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
