import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.pageToRoute2.html'
})

export class Route2Component {
    result: number;
    valA: number;
    valB: number;
    mul(valA, valB) {
        this.result = valA * valB;
        // alert(valA * valB);
    }
}
