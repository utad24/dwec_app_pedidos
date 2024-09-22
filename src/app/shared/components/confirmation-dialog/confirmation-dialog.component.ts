import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Alert } from '../../models/alert';

@Component({
  selector: 'confirmation-dialog',
  standalone: true,
  imports: [NgClass],
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {

  data = input<Alert>(new Alert());
  accept = output<void>();
  cancel = output<void>();

}
