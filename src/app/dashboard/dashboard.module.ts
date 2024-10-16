import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InfoCardComponent } from './_components/info-card/info-card.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        InfoCardComponent,
    ],
    imports: [
        CommonModule, 
        SharedModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        InfoCardComponent,
    ]
})
export class DashboardModule {}
