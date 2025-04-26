import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';
import { Customer } from '../customers/customer.entity';
import { Product } from '../products/product.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepo: Repository<Review>,
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async addReview(customerId: number, productId: number, rating: number, comment: string) {
    const customer = await this.customerRepo.findOne({ where: { id: customerId } });
    const product = await this.productRepo.findOne({ where: { id: productId } });

    if (!customer || !product) {
      throw new Error('Customer or Product not found');
    }

    const review = this.reviewRepo.create({
      customer,
      product,
      rating,
      comment,
    });

    return this.reviewRepo.save(review);
  }

  async getProductReviews(productId: number) {
    return this.reviewRepo.find({
      where: { product: { id: productId } },
      relations: ['customer'],
    });
  }
}
