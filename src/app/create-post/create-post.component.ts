import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router) { 
    this.postForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required]],
      'author': [1]
    })
  }

  ngOnInit() {
  }

  createPost() {
    console.log(this.title);
    this.postsService.createPost(this.postForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/all'])
    })
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }

}
