import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post'
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts: Array<Post>
  constructor(private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }

  routeToPost(id) {
    console.log("roujting..", id);
    this.router.navigate(['/all/' + id])
  }

}
