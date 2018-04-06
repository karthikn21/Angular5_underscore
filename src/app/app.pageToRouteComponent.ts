import * as _ from 'underscore';
import { Component } from '@angular/core';
import { ConfigService } from './config.service';
@Component({
    selector: 'app-root',
    templateUrl: 'app.pageToRoute.html'
})

export class RouteComponent {
    result: number;
    valA: number;
    valB: number;
    valUnderscore: boolean;
    message: string;
    configTxt: string[];
    constructor(private ss: ConfigService) {
        this.ss.getConfig()
        .subscribe((data) => {
            this.configTxt = <any>data;
        });
    }
    // configuration: Config[];
    // console.log(configuration);
    // private _fruits = ['Apple', 'Banana', 'Grapefruit'];
       add(valA, valB) {
        this.result = valA + valB;
        this.valUnderscore = _.contains([1, 2, 3], valA);
        if (this.valUnderscore) {
            this.message = 'array contains value';
        } else {
            this.message = 'array not contains value';
        }
    }
}
