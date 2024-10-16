import { Component } from '@angular/core';
import { AssetsService } from '../../_services/assets.service';

@Component({
    selector: 'app-asset-detail',
    templateUrl: './asset-detail.component.html',
    styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent {
    constructor(
        private assetsService = AssetsService,
    ){}

    loadAssetDetail(){
        // this.assetsService.
    }
}
