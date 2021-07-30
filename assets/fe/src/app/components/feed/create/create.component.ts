import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StateService } from '@uirouter/angular';

import { FeedService } from 'src/app/commons/services/feed/feed.service';
import { Post } from 'src/app/commons/models/feed/feed.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private feedsvc: FeedService,
    private state: StateService
  ) {
    this.Form = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  Form: FormGroup;

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.Form.valid) {
      this.feedsvc.create(this.Form.value)
        .then((resp) => {
          this.state.go('post-list');
        })
      ;
    }

  }

}