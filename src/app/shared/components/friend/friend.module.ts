import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendComponent } from './friend.component';
import { IconsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [FriendComponent],
  imports: [CommonModule, IconsModule],
  exports: [FriendComponent],
})
export class FriendModule {}
