import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { IPostsService } from '../services/posts/posts.service.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public saved: boolean;
  private subs = new Subscription();

  constructor(@Inject('IPostsService') private postsService: IPostsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let content = form.value.content;
    let caption = form.value.caption;

    let post: Post = new Post();
    post.user = new User();
    post.content = content;
    post.caption = caption;
    post.user.id = 1;

    this.postsService.savePost(post);
  }
}
