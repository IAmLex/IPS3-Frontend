import { Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';

export interface IPostsService {
    posts : Subject<Post[]>

    refreshPosts() : void
}