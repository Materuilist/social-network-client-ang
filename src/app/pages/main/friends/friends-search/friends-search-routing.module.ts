import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsSearchComponent } from './friends-search.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsSearchComponent,
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
export class FriendsSearchRoutingModule {}
