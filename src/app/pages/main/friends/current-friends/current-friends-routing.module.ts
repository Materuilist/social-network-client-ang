import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentFriendsComponent } from './current-friends.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentFriendsComponent,
    children: [
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentFriendsRoutingModule {}
