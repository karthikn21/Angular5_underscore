import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './configration';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
   number = 50;
   configTxt: Config[];
   constructor(private ss: ConfigService) {
    this.ss.getConfig()
    .subscribe((data) => {
        this.configTxt = <Config[]>data;
       // alert(this.configTxt[0]);
    });
}
}

