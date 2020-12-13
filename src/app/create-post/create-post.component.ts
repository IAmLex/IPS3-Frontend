import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { IPostsService } from '../services/posts/posts.service.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public saved: boolean;
  private subs = new Subscription();

  constructor(
    @Inject('IPostsService') private postsService: IPostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let content = form.value.content;
    let caption = form.value.caption;

    let post: Post = new Post();
    post.content = content;
    post.caption = caption;

    // TODO: Create class for session storage
    post.user.id = parseInt(sessionStorage.getItem("userId"));

    this.postsService.savePost(post);
    this.router.navigate(["/posts"]);

  }
}
