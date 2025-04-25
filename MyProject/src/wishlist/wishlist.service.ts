// src/wishlist/wishlist.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './wishlist.entity';
import { Product } from 'src/products/product.entity';
import { Customer } from 'src/customers/customer.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  // Add product to wishlist
  async addToWishlist(customerId: number, productId: number) {
    const customer = await this.customerRepository.findOne({ where: { id: +customerId } });
    const product = await this.productRepository.findOne({ where: { id: +productId } });
    
    if (!customer || !product) {
      throw new Error('Invalid customer or product');
    }

    const wishlistItem = new Wishlist();
    wishlistItem.customer = customer;
    wishlistItem.product = product;

    return await this.wishlistRepository.save(wishlistItem);
  }

  // Remove product from wishlist
  async removeFromWishlist(customerId: number, productId: number) {
    const wishlistItem = await this.wishlistRepository.findOne({
      where: { customer: { id: customerId }, product: { id: productId } },
    });

    if (!wishlistItem) {
      throw new Error('Wishlist item not found');
    }

    return await this.wishlistRepository.remove(wishlistItem);
  }

  // Get all wishlist items for a customer
  async getWishlist(customerId: number) {
    return this.wishlistRepository.find({ where: { customer: { id: customerId } }, relations: ['product'] });
  }
}
