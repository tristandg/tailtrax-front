import {Component, OnInit, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddPawPostPage} from "../add-paw-post/add-paw-post";
import {SocialPostsService} from "../../services/social_posts/social-posts.service";
import {SocialPost} from "../../models/social-post";
import {ViewProfilePage} from "../view-profile/view-profile";

/**
 * Generated class for the PawPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-paw-posts',
    templateUrl: 'paw-posts.html',
})
export class PawPostsPage implements OnInit {

    socialPosts: SocialPost[] = [];

    @ViewChild(Content) content: Content;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public socialPostsService: SocialPostsService,
                public modalController: ModalController) {
    }


    goToTop() {

        this.content.scrollTo(0, 0, 1000);

    }

    viewProfile(user) {
        
        this.navCtrl.push(ViewProfilePage, {user: user});
    }

    createPawPost() {

        let addPawPostModal = this.modalController.create(AddPawPostPage, {});

        addPawPostModal.present().then(() => {

            addPawPostModal.onDidDismiss((post) => {

                if (post !== undefined) {
                    this.socialPosts.unshift(post);
                    this.content.scrollTo(0, 0, 1000);

                }
            });
        });


    }

    getPawPosts(refresher?) {
        this.socialPostsService.getAllSocialPosts().then((socialPosts) => {
            this.socialPosts = socialPosts;

            if (refresher !== undefined) {
                refresher.complete();

            }
        });

    }


    ngOnInit(): void {

        this.getPawPosts();


    }

}
