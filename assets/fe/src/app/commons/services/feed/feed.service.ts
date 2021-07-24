import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }


  async getList() {
    const resp = await this.http.get('/api/feed/')
      .toPromise();

    return resp;
  }

}
