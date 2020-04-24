import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    searchName: string = '';

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths(this.searchName);
    }

    /**
     * code reference:
     * https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/
     */
    searchChanged() {
    // Call our service function which returns an Observable
        this.deaths = this.api.getDeaths(this.searchName);
    }

}
