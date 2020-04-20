import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    quote: any;
    qId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.qId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.qId).subscribe(res => {
            this.quote = res[0];
        });
    }
    
}
