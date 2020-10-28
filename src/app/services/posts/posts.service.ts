import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { IPostsService } from './posts.service.interface';
import { User } from 'src/app/models/user.model';

@Injectable()
export class PostsService implements IPostsService {
  public posts = new Subject<Post[]>();
  public saved = new Subject<Boolean>();
  
  constructor(private httpClient : HttpClient) { }

  public refreshPosts() : void {
    this.httpClient.get<Post[]>("http://localhost:8080/api/posts").subscribe((posts) => {
      this.posts.next(posts)
    });
  }

  public savePost(post: Post) : void {
    // FIXME: make request body
    // FIXME: return success or fail.
    let body;

    this.httpClient.post<void>(`http://localhost:8080/api/posts/content/${post.content}/caption/${post.caption}/userId/${post.user.id}`, body).subscribe((success) => {
      console.log(success); 
    });
  }
}
