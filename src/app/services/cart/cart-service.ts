import { Product } from './../../components/products/product';
import { Service, signal } from '@angular/core';

@Service()
export class CartService {

  private readonly cartItems = signal<Product[]>([]);

  addToCard(product: Product) {
    console.log('Produto adicionado ao carrinho:', product);
    this.cartItems.update((items) => [...items, product]); // Retorna uma nova instância, ao invés do push que não retorna.
  };
}
