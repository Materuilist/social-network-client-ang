import {
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() rusName: string;

  constructor() {}

  private _value:any;

  public get value(){
    return this._value;
  }

  public set value(val){
    this._value = val;
    this.onChange(this._value);
  }

  onChange(value: any) {}

  onTouched() {}

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) { 
    this.value = value;
  }
}
