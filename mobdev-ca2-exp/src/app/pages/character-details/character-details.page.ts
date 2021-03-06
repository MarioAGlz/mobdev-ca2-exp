import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LikeService } from 'src/app/services/like.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isLikedC = false;
    charId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
        private likeService: LikeService) { }

    ngOnInit() {
        this.charId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.charId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
        });

        this.likeService.isLikedCh(this.charId).then(isFav => {
            this.isLikedC = isFav;
        });
    }

    likedCharacter() {
        this.likeService.likedCharacter(this.charId).then(() => {
            this.isLikedC = true;
        });
    }

    dislikedCharacter() {
        this.likeService.dislikedCharacter(this.charId).then(() => {
            this.isLikedC = false;
        });
    }

}
