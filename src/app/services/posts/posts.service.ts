import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IPostsService } from './posts.service.interface';

@Injectable()
export class PostsService implements IPostsService {
  public posts = new Subject<Post[]>();
  public post = new Subject<Post>();
  public comments = new Subject<Comment[]>();
  
  constructor(private httpClient : HttpClient) { }

  public refreshPosts() : void {
    this.httpClient.get<Post[]>("http://localhost:8080/api/posts").subscribe((posts) => {
      console.log(posts);
      this.posts.next(posts)
    });
  }

  public getPost(id: Number) {
    this.httpClient.get<Post>(`http://localhost:8080/api/posts/${id}`).subscribe((post) => {
      this.post.next(post)
    });
  }

  public savePost(post: Post) : void {
    let body = post;

    this.httpClient.post<void>(`http://localhost:8080/api/posts`, body).subscribe((success) => {
      console.log(success);
    });
  }

  public getComments(postId: Number) : void {
    this.httpClient.get<Comment[]>(`http://localhost:8080/api/posts/${postId}/comments`).subscribe((comments) => {
      this.comments.next(comments)
    })
  }
}
