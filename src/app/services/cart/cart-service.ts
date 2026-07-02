import { CartItem } from '../../interfaces/cart/cart-item';
import { Product } from './../../components/products/product';
import { computed, Service, signal } from '@angular/core';

@Service()
export class CartService {

  private readonly cartItems = signal<CartItem[]>([]);

  readonly totalItems = computed(() => 
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  )

  addToCard(product: Product): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      };

      return [...items, { product, quantity: 1}]
    });
  };
}
