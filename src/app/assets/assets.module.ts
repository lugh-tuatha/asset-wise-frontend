import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { HardwareComponent } from './_pages/hardware/hardware.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { LicensesComponent } from './_pages/licenses/licenses.component';
import { AccessoriesComponent } from './_pages/accessories/accessories.component';
import { CreateLicenseDialogComponent } from './_components/create-license-dialog/create-license-dialog.component';
import { CreateHardwareDialogComponent } from './_components/create-hardware-dialog/create-hardware-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HardwareAssetDetailComponent } from './_pages/hardware-asset-detail/hardware-asset-detail.component';

@NgModule({
    declarations: [
        AssetsComponent,
        HardwareComponent,
        LicensesComponent,
        AccessoriesComponent,
        CreateLicenseDialogComponent,
        CreateHardwareDialogComponent,
        HardwareAssetDetailComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        LicensesComponent,
        HardwareComponent,
        CreateLicenseDialogComponent,
        CreateHardwareDialogComponent,
        HardwareAssetDetailComponent
    ]
})
export class AssetsModule { }