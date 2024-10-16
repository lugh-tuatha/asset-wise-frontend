import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssetsService } from '../../_services/assets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create-hardware-dialog',
    templateUrl: './create-hardware-dialog.component.html',
    styleUrls: ['./create-hardware-dialog.component.scss']
})
export class CreateHardwareDialogComponent {
    
    constructor(
        private assetsService: AssetsService,
        public dialogRef: MatDialogRef<CreateHardwareDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ){}
    
    hardwareForm = new FormGroup({
        product_name: new FormControl(''),
        product_image: new FormControl(''),
        serial: new FormControl(''),
        model: new FormControl(''),
        category: new FormControl(''),
        status: new FormControl(''),
        location: new FormControl(''),
        notes: new FormControl(''),
        purchase_date: new FormControl(null),
        order_number: new FormControl(''),
        purchase_cost: new FormControl(''),
        eol_date: new FormControl(null),
        supplier: new FormControl(''),
    })

    saveHardwareEntry(){
        const data = this.hardwareForm.value;

        console.log(data)
        this.assetsService.createHardwareData(data).subscribe((res: any) => {
            console.log("hardware created")
            this.dialogRef.close()
        })
    }
}
