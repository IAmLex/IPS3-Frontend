import { Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';

export interface IPostsService {
    posts: Subject<Post[]>
    post: Subject<Post>

    refreshPosts() : void
    getPost(id: Number) : void
    savePost(post: Post) : void
}