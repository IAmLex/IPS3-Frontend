import { ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { IPostsService } from '../services/posts/posts.service.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post = new Post();

  private subs = new Subscription();
  private postId: Number;

  constructor(private route: ActivatedRoute, @Inject('IPostsService') private postsService: IPostsService) {}

  ngOnInit(): void {
    this.subs.add(this.postsService.post.subscribe((post) => {
      this.post = post;
    }));

    this.postId = this.route.snapshot.params.id;

    this.postsService.getPost(this.postId);
  }

  onSubmit(form: NgForm) {
    console.log(form.value.comment)
    let comment = form.value.comment;

    
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
