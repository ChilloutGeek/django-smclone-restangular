import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/commons/services/feed/feed.service';
import { Profile } from 'src/app/commons/models/feed.model'

@Component({
  selector: 'app-sidelists',
  templateUrl: './sidelists.component.html',
  styleUrls: ['./sidelists.component.scss']
})
export class SidelistsComponent implements OnInit {

  constructor(
    private feedsvc: FeedService
  ) { }

  ProfileList = [] as Profile[];
  

  ngOnInit(): void {
    this.feedsvc.getProfile()
    .then((resp) =>{
      this.ProfileList = resp as Profile[];
    })
  }

}
