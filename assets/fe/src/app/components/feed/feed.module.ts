import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListsComponent } from './lists/lists.component';
import { SidelistsComponent } from './sidelists/sidelists.component';
import { CommentsComponent } from './lists/comments/comments.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    ListsComponent,
    SidelistsComponent,
    CommentsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
