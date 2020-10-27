import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { IPostsService } from '../services/posts/posts.service.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  newPostStatus = '';
  newPostAllowed = false;
  postCreated = false;
  caption = 'Default caption';
  public posts: Post[] = [];
  private subs = new Subscription();

  constructor(@Inject('IPostsService') private postsService: IPostsService) { 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.newPostAllowed = true;
    }, 500);

    this.subs.add(this.postsService.posts.subscribe((posts) => {
      this.posts = posts;
    }));
  }

  public refreshPosts() {
    this.postsService.refreshPosts();
  }

  onCreatePost() {
    this.postCreated = true;
    setTimeout(() => {
      this.postCreated = false;
    }, 2000);
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
