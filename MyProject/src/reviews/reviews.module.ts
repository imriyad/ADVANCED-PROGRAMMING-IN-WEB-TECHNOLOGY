import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './review.entity'; 
import { Customer } from '../customers/customer.entity'; 
import { Product } from '../products/product.entity';    

@Module({
  imports: [
    TypeOrmModule.forFeature([Review, Customer, Product]),  
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
