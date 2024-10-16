import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../_services/assets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hardware-asset-detail',
    templateUrl: './hardware-asset-detail.component.html',
    styleUrls: ['./hardware-asset-detail.component.scss']
})

export class HardwareAssetDetailComponent{
    displayedLabel = ['Asset Tag', 'Status', 'Serial', 'Category', 'Model', 'Location', 'Order Number', 'Purchase Date', 'Purchase Cost', 'Created at', 'Updated at', 'Checkouts', 'Checkins', 'Request']
    productDetail: any;

    constructor(
        private assetsService: AssetsService,
        private route: ActivatedRoute
    ){}

    assetId: string | null = null;

    ngOnInit(): void {
        this.assetId = this.route.snapshot.paramMap.get('id');
        this.loadProductDetail()
    }

    loadProductDetail(){
        this.assetsService.getHardwareDataById(this.assetId).subscribe((res: any) => {
            console.log(this.productDetail)
            this.productDetail = res;
            console.log(this.productDetail.status)
        })
    }
}
