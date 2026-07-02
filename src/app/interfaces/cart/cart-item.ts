import { Product } from './../../components/products/product';

export interface CartItem {
  product: Product;
  quantity: number;
}
