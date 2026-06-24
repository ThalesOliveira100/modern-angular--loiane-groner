import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem vindo ao Angular Moderno';
  protected clickCount = signal(0);
  protected isDisabled = signal(false);

  protected onClick() {
    this.clickCount.set(this.clickCount() + 1);
    this.isDisabled.set(!this.isDisabled());
  }
}
