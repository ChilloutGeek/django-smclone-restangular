import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { SidelistsComponent } from './sidelists/sidelists.component';

@NgModule({
  declarations: [
    ListsComponent,
    SidelistsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedModule { }
