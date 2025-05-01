// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/customer.entity';
import { Product } from 'src/products/product.entity';
import { AddToCartDto } from './cart.dto';
import { Cart } from './cart.entity';


@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepo: Repository<Cart>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async addToCart(data: AddToCartDto) {
    const customer = await this.customerRepo.findOneBy({ id: data.customerId });
    const product = await this.productRepo.findOneBy({ id: data.productId });

    if (!customer) {
        throw new Error('Customer not found');
      }
      
      if (!product) {
        throw new Error('Product not found');
      }
      
    const cartItem = this.cartRepo.create({
      customer,
      product,
      quantity: data.quantity,
    });

    return this.cartRepo.save(cartItem);
  }

  async getCartByCustomer(customerId: number) {
    return this.cartRepo.find({
      where: { customer: { id: customerId } },
      relations: ['product'],
    });
  }

  async updateQuantity(cartId: number, quantity: number) {
    await this.cartRepo.update(cartId, { quantity });
    return { message: 'Quantity updated' };
  }

  async removeFromCart(cartId: number) {
    return this.cartRepo.delete(cartId);
  }
async clearCart(customerId: number) {
    return this.cartRepo.delete({ customer: { id: customerId } });
  }
  
  
}