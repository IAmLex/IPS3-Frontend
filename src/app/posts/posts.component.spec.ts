import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { IPostsService } from '../services/posts/posts.service.interface';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let service: IPostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: 'IPostsService', useValue: jasmine.createSpyObj('IPostsService', ['refreshPosts']) }
      ]
    })
    .compileComponents();

    service = TestBed.get('IPostsService');
    service.posts = new Subject();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call refreshPosts', () => {
    component.refreshPosts();

    expect(service.refreshPosts).toHaveBeenCalled();

  });
});