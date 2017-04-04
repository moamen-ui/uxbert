import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class AppService {
    
    constructor(private _http: Http) {

    }
    
    getPosts() {
        return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Riyadh,ksa&appid=a809c777d6813b6b0905a9a7bf1a8399&units=metric").map(res=>res.json());
    }
}