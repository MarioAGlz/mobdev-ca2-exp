import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LikeService } from 'src/app/services/like.service';


@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;
    isLikedE = false;
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
        private likeService: LikeService) { }

    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });

        this.likeService.isLikedEp(this.episodeId).then(isFav => {
            this.isLikedE = isFav;
        });
    }

    likedEpisode() {
        this.likeService.likedEpisode(this.episodeId).then(() => {
            this.isLikedE = true;
        });
    }

    dislikedEpisode() {
        this.likeService.dislikedEpisode(this.episodeId).then(() => {
            this.isLikedE = false;
        });
    }

}
