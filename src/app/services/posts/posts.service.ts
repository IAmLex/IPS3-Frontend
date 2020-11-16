import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { IPostsService } from './posts.service.interface';

@Injectable()
export class PostsService implements IPostsService {
  public posts = new Subject<Post[]>();
  public post = new Subject<Post>();
  
  constructor(private httpClient : HttpClient) { }

  public refreshPosts() : void {
    this.httpClient.get<Post[]>("http://localhost:8080/api/posts").subscribe((posts) => {
      this.posts.next(posts)
    });
  }

  public getPost(id: Number) {
    this.httpClient.get<Post>(`http://localhost:8080/api/posts/${id}`).subscribe((post) => {
      this.post.next(post)
    });
  }

  public savePost(post: Post) : void {
    // FIXME: make request body
    // FIXME: return success or fail.
    let body = post;

    this.httpClient.post<void>(`http://localhost:8080/api/posts`, body).subscribe((success) => {
      console.log(success);
    });
  }
}
