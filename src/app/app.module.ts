import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PostsService } from './services/posts/posts.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { Interceptor } from './http-interceptors/interceptor';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/users/user.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CommentService } from './services/comments/comments.service';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    CreatePostComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: 'IPostsService', useClass: PostsService },
    { provide: 'IUserService', useClass: UserService },
    { provide: 'ICommentService', useClass: CommentService },
    { provide: 'IAuthenticationService', useClass: AuthenticationService },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
