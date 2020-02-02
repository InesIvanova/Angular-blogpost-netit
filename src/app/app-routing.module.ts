import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { component: HomeComponent, path: 'home'},
  { component: CreatePostComponent, path: 'create-post'},
  { component: PostComponent, path: 'all/:id' },
  { component: ListPostsComponent, path: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
