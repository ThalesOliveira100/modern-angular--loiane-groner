import { Product } from './../product';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Adicionar ao carrinho');
  readonly addToCart = output<Product>();

  protected onAddToCard() {
    this.addToCart.emit(this.product());
  }
}
