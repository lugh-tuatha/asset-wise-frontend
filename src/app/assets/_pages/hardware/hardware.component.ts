import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HardwareModel } from '../../_models/hardware.model';
import { AssetsService } from '../../_services/assets.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreateHardwareDialogComponent } from '../../_components/create-hardware-dialog/create-hardware-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: ['./hardware.component.scss'],
})
export class HardwareComponent {
    displayedColumns: string[] = ['product_name', 'product_image', 'serial', 'model', 'category', 'status', 'account_person', 'location', 'purchase_cost', 'is_checkout', 'action'];
    dataSource: MatTableDataSource<HardwareModel> = new MatTableDataSource()

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    status!: string;

    constructor( 
        private assetsService: AssetsService,
        public dialog: MatDialog,
        private route: ActivatedRoute
        // this.dataSource = new MatTableDataSource()
    ){ }

    ngOnInit(){
        this.route.queryParams.subscribe(params => {
            this.status = params['status']
            console.log(this.status)
            this.loadHardwareData();
        })
    }

    loadHardwareData(){
        if(this.status == undefined) {
            this.assetsService.getAllHardwareData().subscribe(
                (res: any) => {
                    this.setDataSource(res)
                    console.log(res);
                },
                (error) => {
                    console.log('Error loading hardware data:', error)
                }
            )
        }else {
            this.assetsService.getHardwareDataByStatus(this.status).subscribe(
                (res: any) => {
                    this.setDataSource(res)
                    console.log(res);
                },
                (error) => {
                    console.log('Error loading hardware data:', error)
                    this.setDataSource([])
                }
            )
        }       
    }

    setDataSource(data: any){
        this.dataSource = new MatTableDataSource<HardwareModel>(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;   
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    createNewHardware(){
        const dialogRef = this.dialog.open(CreateHardwareDialogComponent)

        dialogRef.afterClosed().subscribe(res => {
            this.loadHardwareData()
        })
    }

    deleteProduct(id: string){
        this.assetsService.deleteHardwareData(id).subscribe((res: any) => {
            console.log(id + " entry is deleted")
            this.loadHardwareData()
        })
    } 
}
