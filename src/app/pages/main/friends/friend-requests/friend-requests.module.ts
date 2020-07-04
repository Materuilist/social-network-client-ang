import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestsComponent } from './friend-requests.component';
import { FriendRequestsRoutingModule } from './friend-requests-routing.module';



@NgModule({
  declarations: [FriendRequestsComponent],
  imports: [
    CommonModule,
    FriendRequestsRoutingModule
  ]
})
export class FriendRequestsModule { }
