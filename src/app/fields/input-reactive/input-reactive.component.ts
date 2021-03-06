import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-reactive',
  templateUrl: './input-reactive.component.html',
  styleUrls: ['./input-reactive.component.sass']
})
export class InputReactiveComponent {
  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() class: string;
  @Input() label: string;

  get hasError() {
    const control = this.formGroup.get(this.formControlName);
    return control.touched && control.errors;
  }
}
