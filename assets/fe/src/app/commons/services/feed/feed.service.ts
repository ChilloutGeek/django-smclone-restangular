import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/commons/models/feed/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  async create(data: Post) {
    const resp = await this.http.post('/api/feed/posts/', data)
      .toPromise();

    return resp;
  }

  async getList() {
    const resp = await this.http.get('/api/feed/posts/')
      .toPromise();

    return resp;
  }

  async getComments(postId: number) {
    const resp = await this.http.get(`/api/feed/posts/${postId}/comments/`)
      .toPromise();

    return resp;
  }

}
