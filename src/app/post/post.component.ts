import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  post: Post;
  constructor(private route: ActivatedRoute,
    private postService: PostsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id']
      console.log(this.id);
      this.postService.getPost(this.id).subscribe(post => {
        this.post = post;
      })
      
    })
  }
}
