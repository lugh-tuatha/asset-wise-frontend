import { Component, ViewChild } from '@angular/core';
import { AssetsService } from '../../_services/assets.service';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseModel } from '../../_models/licenses.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.component.html',
    styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent {
    displayedColumns: string[] = ['asset_name', 'product_key', 'expirataion_date', 'license_to_email', 'license_to_name', 'manufacturer', 'total', 'is_checkout', 'action'];
    dataSource!: MatTableDataSource<LicenseModel>

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor( 
        private assetsService: AssetsService
    ){ }

    ngOnInit(): void {
        this.loadLicensesData()
    }

    loadLicensesData(){
        this.assetsService.getAllLicensesData().subscribe((res: any) => {
            const ds = res.data;
            this.dataSource = new MatTableDataSource<LicenseModel>(ds)

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
