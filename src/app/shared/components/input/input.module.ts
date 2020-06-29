import { NgModule } from "@angular/core";
import { InputComponent } from './input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations:[InputComponent],
    imports:[ReactiveFormsModule, FormsModule],
    exports:[InputComponent, ReactiveFormsModule, FormsModule]
})
export class InputModule{}