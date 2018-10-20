import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PawPostsPage} from './paw-posts';
import {AddPawPostPageModule} from "../add-paw-post/add-paw-post.module";
import {SocialPostsService} from "../../services/social_posts/social-posts.service";
import {PipesModule} from "../../pipes/pipes.module";
import {CommentComponent} from "../../components/comment/comment";
import {FavoriteComponent} from "../../components/favorite/favorite";

@NgModule({
    declarations: [PawPostsPage, CommentComponent, FavoriteComponent],
    imports: [
        IonicPageModule.forChild(PawPostsPage),
        AddPawPostPageModule,
        PipesModule
    ],
    entryComponents: [
        CommentComponent,
        FavoriteComponent
    ],
    providers: [
        SocialPostsService,

    ]
})
export class PawPostsPageModule {
}
