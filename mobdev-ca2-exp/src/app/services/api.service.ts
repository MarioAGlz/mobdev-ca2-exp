import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }
    /* getEpisodes() {
        return this.http.get('https://8100-ff49b643-a902-4724-ba90-00b89f17cb60.ws-eu01.gitpod.io/assets/episodes.json');
    } */

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
    /* getEpisode(id) {
        return this.http.get(`https://8100-ff49b643-a902-4724-ba90-00b89f17cb60.ws-eu01.gitpod.io/assets/episod.json`);
    } */

    getCharacters(offset=0) {
         return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=21&offset=${offset}`);
    }
    /* getCharacters() {
        return this.http.get('https://8100-ff49b643-a902-4724-ba90-00b89f17cb60.ws-eu01.gitpod.io/assets/characs.json');
    } */

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }
    /* getCharacter(id) {
        return this.http.get(`https://8100-ff49b643-a902-4724-ba90-00b89f17cb60.ws-eu01.gitpod.io/assets/chart.json`);
    } */

    /**
    * code reference:  
    * https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/ 
    * Get data from the BreakingBad Api 
    * @param {string} name Search Term
    */
    getQuotes(name: string) {
        return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${encodeURI(name)}`);
    }

    getAllQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths(name: string) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${encodeURI(name)}`);
    }
}
