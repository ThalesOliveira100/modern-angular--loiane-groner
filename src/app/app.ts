import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './components/hello/hello';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('modern-angular-zero-to-advanced--loiane-groner');
}
