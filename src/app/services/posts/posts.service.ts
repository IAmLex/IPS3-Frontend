import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { IPostsService } from './posts.service.interface';

@Injectable()
export class PostsService implements IPostsService {
  public posts = new Subject<Post[]>();
  
  constructor(private httpClient : HttpClient) { }

  public refreshPosts() : void {
    this.httpClient.get<Post[]>("http://localhost:8080/api/posts").subscribe((posts) => {
      this.posts.next(posts)
    });
  }

}
