import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  path = environment.apiUrl + 'posts/';
  constructor(private http: HttpClient) { 
    
  }

  createPost(data) {
    return this.http.post(this.path + 'posts/', data)
  }

  getPosts(): Observable<Array<Post>> {
    console.log(this.path + 'posts')
    return this.http.get<Array<Post>>(this.path + 'posts/')
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(this.path + 'posts/' + id  + '/')
  }

}
