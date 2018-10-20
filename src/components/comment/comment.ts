import {Component, Input} from '@angular/core';
import {SocialPost} from "../../models/social-post";
import {SocialPostsService} from "../../services/social_posts/social-posts.service";
import {PostComment} from "../../models/post-comment";

/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'comment',
    templateUrl: 'comment.html'
})
export class CommentComponent {


    showing: boolean = false;

    @Input('post') post: SocialPost;

    commentText: string = "";

    viewComments() {

        this.showing = !this.showing;

    }

    public postComment() {


        let comment = new PostComment();
        comment.content = this.commentText;
        comment.post_id = this.post.id;

        this.socialPosts.createComment(comment).then((commentToPush) => {
            this.post.social_comments.push(commentToPush);
        });

        this.commentText = "";

    }

    constructor(public socialPosts: SocialPostsService) {


    }

}
