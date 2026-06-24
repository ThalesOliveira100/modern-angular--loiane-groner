import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hello.scss',
})
export class Hello {}
