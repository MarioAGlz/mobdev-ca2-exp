import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY1 = 'likedEpisodes';
const STORAGE_KEY2 = 'likedCharacters';

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private storage: Storage) { }

    getAllLikedEpisodes() {
        return this.storage.get(STORAGE_KEY1);
    }

    isLikedEp(episodeId) {
        return this.getAllLikedEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    likedEpisode(episodeId) {
        return this.getAllLikedEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY1, result);
            } else {
                return this.storage.set(STORAGE_KEY1, [episodeId]);
            }
        });
    }

    dislikedEpisode(episodeId) {
        return this.getAllLikedEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY1, result);
            }
        });
    }

    getAllLikedCharacters() {
        return this.storage.get(STORAGE_KEY2);
    }

    isLikedCh(charactId) {
        return this.getAllLikedCharacters().then(result => {
            return result && result.indexOf(charactId) !== -1;
        });
    }

    likedCharacter(charactId) {
        return this.getAllLikedCharacters().then(result => {
            if (result) {
                result.push(charactId);
                return this.storage.set(STORAGE_KEY2, result);
            } else {
                return this.storage.set(STORAGE_KEY2, [charactId]);
            }
        });
    }

    dislikedCharacter(charactId) {
        return this.getAllLikedCharacters().then(result => {
            if (result) {
                var index = result.indexOf(charactId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY2, result);
            }
        });
    }

}
