import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    searchTerm: string = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        //this.quotes = this.api.getQuotes();
    }

    /**
     * code reference:
     * https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/
     */
    searchChanged() {
    // Call our service function which returns an Observable
    this.quotes = this.api.getQuotes(this.searchTerm);
    }
    
    openDetails(quote) {
        let qId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${qId}`);
    }

}
