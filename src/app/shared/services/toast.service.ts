import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // Signal para el mensaje del toast
  toastMessage = signal<string | null>(null);

  // Signal para controlar si el toast está visible
  toastVisible = signal<boolean>(false);

  isSuccess = signal<boolean>(true);

  // Método para mostrar el toast con un mensaje
  showToast(message: string, isSuccess: boolean = true): void {
    this.toastMessage.set(message);
    this.toastVisible.set(true);
    this.isSuccess.set(isSuccess);

    // Ocultar el toast automáticamente después de 3 segundos
    setTimeout(() => {
      this.toastVisible.set(false);
    }, 3000);
  }
}
