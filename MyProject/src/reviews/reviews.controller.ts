import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('add')
  async addReview(
    @Body() body: { customerId: number; productId: number; rating: number; comment: string },
  ) {
    const { customerId, productId, rating, comment } = body;
    return this.reviewsService.addReview(customerId, productId, rating, comment);
  }

  @Get('product/:productId')
  async getProductReviews(@Param('productId') productId: number) {
    return this.reviewsService.getProductReviews(productId);
  }
}
