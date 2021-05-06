import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Some description',
      price: 232,
      image: 'http://www.image.com',
      stock: 2,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any): Product {
    this.counter += 1;
    const newProduct: Product = {
      id: this.counter,
      ...payload,
    };

    return newProduct;
  }

  update(id: number, payload: any) {
    const productIndex: number = this.products.findIndex(
      (prod) => prod.id === id,
    );

    let product: Product;
    if (productIndex >= 0) {
      product = this.products[productIndex];
      product = { ...product, ...payload };
      return product;
    } else {
      return null;
    }
  }

  delete(id: number) {
    const products: Product[] = this.products.filter(
      (product) => product.id !== id,
    );

    return products;
  }
}
