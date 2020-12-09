import { Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

export interface ICommentService {
    saveComment(comment: Comment) : void
}