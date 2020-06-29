import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InputModule,
    SpinnerModule
  ]
})
export class ProfileModule { }
