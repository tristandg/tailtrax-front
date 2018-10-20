import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {SocialPost} from '../../models/social-post';
import {PostComment} from '../../models/post-comment';
import {SocialLike} from '../../models/social-like';
import {PostReport} from '../../models/post-report';

@Injectable()
export class SocialPostsService {
    socialPostsUrl = 'social_posts';
    getAllSocialPostsUrl = 'social_posts/getAll';
    likeSocialPostsUrl = 'social_posts/like';
    commentSocialPostsUrl = 'social_posts/comment';

    constructor(private http: HttpService) {
    }

    // Get all social posts
    getAllSocialPosts(): Promise<SocialPost[]> {
        return this.http.get(this.getAllSocialPostsUrl)
            .toPromise()
            .catch(this.handleError);
    }

    // Get all social posts belonging to a specific user
    getSocialPost(id: number): Promise<SocialPost> {
        const url = `${this.socialPostsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    getAllSocialPostsForGroup(id: number): Promise<SocialPost[]> {
        return this.http.get(`${this.socialPostsUrl}/group-posts/${id}`)
            .toPromise()
            .catch(this.handleError);
    }

    reportPost(id: number): Promise<PostReport> {
        const url = `${this.socialPostsUrl}/report/${id}`;

        return this.http.post(url, '')
            .toPromise()
            .catch(this.handleError);
    }

    getPostReports(): Promise<PostReport[]> {
        const url = `${this.socialPostsUrl}/reports`;

        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    createComment(comment: PostComment): Promise<PostComment> {
        return this.http.post(this.commentSocialPostsUrl, JSON.stringify(comment))
            .toPromise()
            .catch(this.handleError);
    }

    // Create a social post
    create(socialPost: SocialPost): Promise<SocialPost> {
        return this.http.post(this.socialPostsUrl, JSON.stringify(socialPost))
            .toPromise()
            .catch(this.handleError);
    }

    createLike(socialPost: SocialPost): Promise<SocialLike> {
        const url = `${this.socialPostsUrl}/like`;
        return this.http.post(url, JSON.stringify({post_id: socialPost.id}))
            .toPromise()
            .catch(this.handleError);
    }

    removeLike(socialPost: SocialPost): Promise<any> {
        const url = `${this.socialPostsUrl}/like/${socialPost.id}`;
        return this.http.delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    delete(socialPost: SocialPost): Promise<boolean> {
        const url = `${this.socialPostsUrl}/${socialPost.id}`;
        return this.http.delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
