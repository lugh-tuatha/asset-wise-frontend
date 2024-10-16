import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

// ui components
import { ButtonComponent } from './ui/button/button.component';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/_components/container/container.component';

@NgModule({
    declarations: [
        ButtonComponent,
        BreadcrumbComponent,
        BreadcrumbComponent,
        LayoutComponent,
        ContainerComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        ButtonComponent,
        BreadcrumbComponent,
        ContainerComponent
    ]
})
export class SharedModule { }
