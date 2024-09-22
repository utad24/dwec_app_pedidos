import { Component, effect, input, OnInit, output } from '@angular/core';
import { Alert } from '../../models/alert';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'status-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './status-dialog.component.html'
})
export class StatusDialogComponent implements OnInit {

  currentStatus = input<string>('');
  data = input<Alert>();
  mForm: FormGroup = new FormGroup({});

  accept = output<string>();
  cancel = output<void>();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.mForm = this.fb.group({
      status: [this.currentStatus(), [Validators.required, Validators.pattern('^(pending|shipped|delivered|refunded)$')]]
    })
  }

  makeAction() {
    if (this.mForm.valid) {
      this.accept.emit(this.mForm.value.status);
    } else {
      alert('Formulario invalido');
    }
  }

}
