import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/commons/services/users/users.service';
import { Profile } from 'src/app/commons/models/users/user.model';


@Component({
  selector: 'app-sidelists',
  templateUrl: './sidelists.component.html',
  styleUrls: ['./sidelists.component.scss']
})
export class SidelistsComponent implements OnInit {

  constructor(
    private usersvc: UserService
  ) { }

  ProfileList = [] as Profile[];
  ProfileUser = {} as Profile;

  ngOnInit(): void {

    this.usersvc.getProfile()
    .then((resp) => {

      this.ProfileList = resp as Profile[];
    })

    this.usersvc.getProfileUser()
    .then((resp) => {
      this.ProfileUser = resp as Profile;
    })
  }

}
