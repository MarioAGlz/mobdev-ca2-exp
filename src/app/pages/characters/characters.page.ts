import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    offset = 0;
    characters = [];
    @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

    constructor(private router: Router, private api: ApiService) { }

/*   
    code reference:
    https://devdactic.com/ionic-4-pokedex-search-scroll/
*/
    ngOnInit() {
        this.loadCharts();
    }

    loadCharts(loadMoreC=false, event?) {
        if(loadMoreC) {
            this.offset += 21;
        }
        this.api.getCharacters(this.offset).subscribe(res => {
           console.log('result: ', res);
            this.characters = [...this.characters, res];
        });

        if(event) {
            event.target.complete();
        }

        if(this.offset == 42) {
            this.infiniteScroll.disabled=true;
        }
    }

    openDetails(character) {
        let charId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${charId}`);
    }

}
