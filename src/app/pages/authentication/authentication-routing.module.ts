import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes:Routes = [
    {
        path:'',
        component:AuthenticationComponent,
    },
    {
        path:'**',
        redirectTo:'/auth'
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{}