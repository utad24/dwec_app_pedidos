import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'toast',
  standalone: true,
  template: `
  @if (toastVisible()) {
    <div class="fixed bottom-4 right-4 p-4 rounded-md shadow-lg transition-opacity"
        [class.bg-green-500]="isSuccess()"
        [class.bg-red-500]="!isSuccess()"
        [class.opacity-0]="!toastVisible()"
        [class.opacity-100]="toastVisible()">
      <p class="text-white">{{ toastMessage() }}</p>
    </div>
  }
`,
  styles: [`
  .transition-opacity {
    transition: opacity 0.5s ease-in-out;
  }
`]
})
export class ToastComponent {
  toastMessage
  toastVisible

  // Determina si el toast es de éxito o de error 
  isSuccess

  constructor(private toastService: ToastService) {
    this.toastMessage = this.toastService.toastMessage;
    this.toastVisible = this.toastService.toastVisible;
    this.isSuccess = this.toastService.isSuccess;
  }
}