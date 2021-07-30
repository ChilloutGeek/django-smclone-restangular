import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/commons/models/feed/feed.model';
import { FeedService } from 'src/app/commons/services/feed/feed.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor(
    private feedsvc: FeedService
  ) {}
  
  postlist = [] as Post[];

  ngOnInit(): void {
  
    this.feedsvc.getList()
    .then((resp) => {
      
      this.postlist = resp as Post[];
    })
  }

}
