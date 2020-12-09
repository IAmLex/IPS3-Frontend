import { Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

export interface IPostsService {
    posts: Subject<Post[]>
    post: Subject<Post>
    comments: Subject<Comment[]>

    refreshPosts() : void
    getPost(id: Number) : void
    savePost(post: Post) : void
    getComments(postId: Number) : void
}