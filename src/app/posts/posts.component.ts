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
  public posts: Post[] = [];
  private subs = new Subscription();

  constructor(@Inject('IPostsService') private postsService: IPostsService) { 
    
  }

  ngOnInit(): void {
    this.subs.add(this.postsService.posts.subscribe((posts) => {
      this.posts = posts;
    }));

    this.refreshPosts();
  }

  public refreshPosts() {
    this.postsService.refreshPosts();
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
