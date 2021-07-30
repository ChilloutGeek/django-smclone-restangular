import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  async getProfile() {
    const resp = await this.http.get('/api/users/profilelist/')
      .toPromise();

    return resp;
  }

  async getProfileUser(){
    const resp = await this.http.get('api/users/profileuser/')
    .toPromise();

    return resp;
  }

}
