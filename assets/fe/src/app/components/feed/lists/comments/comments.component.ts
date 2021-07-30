import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from 'src/app/commons/services/feed/feed.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(
    private feedsvc: FeedService
  ) { }

  @Input('postId') postId: any;

  comments = [] as any[];

  ngOnInit(): void {

    this.feedsvc.getComments(this.postId)
      .then((resp) => {
        this.comments = resp as any[];
      })
    ;

  }

}
