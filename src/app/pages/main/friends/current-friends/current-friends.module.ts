import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentFriendsComponent } from './current-friends.component';
import { CurrentFriendsRoutingModule } from './current-friends-routing.module';

@NgModule({
  declarations: [CurrentFriendsComponent],
  imports: [
    CommonModule,
    CurrentFriendsRoutingModule
  ]
})
export class CurrentFriendsModule { }
