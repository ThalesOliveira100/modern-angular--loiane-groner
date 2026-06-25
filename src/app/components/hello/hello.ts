import { Component, ChangeDetectionStrategy, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem vindo ao Angular Moderno';
  protected clickCounter = signal(0);
  protected doubleCount = computed(() => this.clickCounter() * 2);
  private readonly countLog = effect(() => {
    console.log(`Contagem mudou:`, this.clickCounter())
  });
  protected isDisabled = signal(false);

  protected onClick(): void {
    this.isDisabled.set(!this.isDisabled());
  }

  // Dá pra fazer assim e da forma utilizada no decreaseCounter.
  protected increateCounter(): void {
    this.clickCounter.set(this.clickCounter() + 1);
  }

  // É possível utilizar o update para utilizar uma callback
  protected decreaseCounter(): void {
    this.clickCounter.update((value) => value -1);
  }

  protected resetCounter(): void {
    this.clickCounter.set(0);
  }
}
