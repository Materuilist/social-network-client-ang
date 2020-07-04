import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsComponent,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('./friends-search/friends-search.module').then(
            (m) => m.FriendsSearchModule
          ),
      },
      {
        path: 'current',
        loadChildren: () =>
          import('./current-friends/current-friends.module').then(
            (m) => m.CurrentFriendsModule
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./friend-requests/friend-requests.module').then(
            (m) => m.FriendRequestsModule
          ),
      },
      {
        path: '**',
        redirectTo: 'current',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
