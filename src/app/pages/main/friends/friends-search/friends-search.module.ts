import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsSearchComponent } from './friends-search.component';
import { FriendsSearchRoutingModule } from './friends-search-routing.module';
import { FriendModule } from 'src/app/shared/components/friend/friend.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';



@NgModule({
  declarations: [FriendsSearchComponent],
  imports: [
    CommonModule,
    FriendsSearchRoutingModule,
    FriendModule,
    SpinnerModule,
  ]
})
export class FriendsSearchModule { }
