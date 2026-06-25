import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      nome: 'Fones de Ouvido Bluetooth Premio',
      descricao: 'Fones de ouvidos de alta qualidade com cancelamento de ruído e sons premiuns pré instalados.',
      preco: 199.99,
      precoOriginal: 249.99,
    },
    {
      id: 2,
      nome: 'Relógio Smart Fitness',
      descricao: 'Rastreie suas metas fitness com esse avançado smartwatch com pulsação do coração e outras funções.',
      preco: 299.00
    },
    {
      id: 3,
      nome: 'Microfone Portátil Bluetooth',
      descricao: 'Um microfone compacto com bateria duradoura de até 12 horas.',
      preco: 79.00
    }
  ]);
}
