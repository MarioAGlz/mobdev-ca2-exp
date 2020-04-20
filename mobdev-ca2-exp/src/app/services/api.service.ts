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

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters');
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    /**
    * Get data from the BreakingBad Api 
    * @param {string} name Search Term
    * code reference:  
    * https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/
    */
    getQuotes(name: string) {
        return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${encodeURI(name)}`);
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths(name: string) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${encodeURI(name)}`);
    }
}
