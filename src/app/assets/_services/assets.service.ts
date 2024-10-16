import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class AssetsService {
    constructor(private _http: HttpClient) { }

    getAllHardwareData(){
        return this._http.get(environment.API_BASEURL + "assets/hardware")
    }

    getHardwareDataById(id: string | null){
        return this._http.get(environment.API_BASEURL + "assets/hardware/" + id)
    }

    getHardwareDataByStatus(status: string | null){
        return this._http.get(environment.API_BASEURL + "assets/hardware/filter?status=" + status)
    }

    getAllLicensesData(){
        return this._http.get("http://localhost:4200/assets/data/licenses.json")
    }

    deleteHardwareData(id: string){
        return this._http.delete(environment.API_BASEURL + "assets/hardware/" + id)
    }

    createHardwareData(data: any){
        return this._http.post(environment.API_BASEURL + "assets/hardware", data)
    }
}
