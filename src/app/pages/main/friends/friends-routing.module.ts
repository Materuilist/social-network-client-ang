import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends.component';

const routes:Routes = [
    {
        path:'',
        component:FriendsComponent,
        children:[
            {
                path:'**',
                redirectTo:''
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FriendsRoutingModule{}