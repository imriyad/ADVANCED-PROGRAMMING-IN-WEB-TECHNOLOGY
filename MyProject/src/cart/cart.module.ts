import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity'; // your Cart entity
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Customer } from 'src/customers/customer.entity';
import { Product } from 'src/products/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, Customer, Product]) // ✅ Include all required repositories
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService] 
})
export class CartModule {}
