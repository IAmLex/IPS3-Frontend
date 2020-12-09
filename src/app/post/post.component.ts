import { ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { ICommentService } from '../services/comments/comments.service.interface';
import { IPostsService } from '../services/posts/posts.service.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post = new Post();
  public comments: Comment[];

  private postId: Number;
  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute, 
    @Inject('IPostsService') private postsService: IPostsService,
    @Inject('ICommentService') private commentService: ICommentService  
  ) {}

  ngOnInit(): void {
    this.subs.add(this.postsService.post.subscribe((post) => {
      this.post = post;
    }));

    this.subs.add(this.postsService.comments.subscribe((comments) => {
      this.comments = comments;
    }))

    this.postId = this.route.snapshot.params.id;

    this.postsService.getPost(this.postId);
    this.refreshComments();
  }

  onSubmit(form: NgForm) {
    let comment: Comment = new Comment();
    comment.text = form.value.comment;
    comment.user.id = parseInt(sessionStorage.getItem("userId"));
    comment.post.id = this.post.id;

    // TODO: Remove console.log
    console.log(`${comment.text} by ${comment.user.id} on ${comment.post.id}`);

    this.commentService.saveComment(comment);

    this.refreshComments();
  }

  refreshComments() {
    this.postsService.getComments(this.postId);
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
