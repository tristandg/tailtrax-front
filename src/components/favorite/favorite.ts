import {Component, Input, OnInit} from '@angular/core';
import {SocialPost} from "../../models/social-post";
import {SocialPostsService} from "../../services/social_posts/social-posts.service";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'favorite',
    templateUrl: 'favorite.html'
})
export class FavoriteComponent implements OnInit {

    @Input('post') public post: SocialPost;

    liked: boolean = false;

    like() {

        if (this.liked === true) {

            this.removeLikeForUser();

            this.socialPostsService.removeLike(this.post);

        } else {
            this.socialPostsService.createLike(this.post).then((like) => {
                this.post.social_likes.push(like);
            });
        }

        this.toggleLiked();

    }

    private removeLikeForUser() {
        for (let i = 0; i < this.post.social_likes.length; i++) {

            if (this.post.social_likes[i].user.id === this.userProvider.getUser().id) {
                this.post.social_likes.splice(i, 1);
                break;
            }
        }
    }

    private toggleLiked() {
        this.liked = !this.liked;
    }

    constructor(public socialPostsService: SocialPostsService, public userProvider: UserProvider) {


    }

    ngOnInit(): void {

        this.calculateIfLiked();

    }

    private calculateIfLiked() {

        for (const value of this.post.social_likes) {

            if (value.user.id === this.userProvider.getUser().id) {
                this.liked = true;
                break;
            }
        }
    }
}
