
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './wishlist.entity';
import { Product } from 'src/products/product.entity';
import { Customer } from 'src/customers/customer.entity';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist, Product, Customer])],
  providers: [WishlistService],
  controllers: [WishlistController],
})
export class WishlistModule {}
