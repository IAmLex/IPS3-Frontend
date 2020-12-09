import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICommentService } from './comments.service.interface';
import { Comment } from 'src/app/models/comment.model';

@Injectable()
export class CommentService implements ICommentService {
    constructor(private httpClient: HttpClient) {}

    saveComment(comment: Comment): void {
        this.httpClient.post("http://localhost:8080/api/comments", comment).subscribe((comment) => {
            console.log("test");
        });
    }
}
