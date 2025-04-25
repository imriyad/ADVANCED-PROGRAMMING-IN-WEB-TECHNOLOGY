import { Controller, Post, Delete, Get, Param, Body } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post('add/:customerId/:productId')
  addToWishlist(@Param('customerId') customerId: number, @Param('productId') productId: number) {
    return this.wishlistService.addToWishlist(customerId, productId);
  }

  @Delete('remove/:customerId/:productId')
  removeFromWishlist(@Param('customerId') customerId: number, @Param('productId') productId: number) {
    return this.wishlistService.removeFromWishlist(customerId, productId);
  }

  @Get(':customerId')
  getWishlist(@Param('customerId') customerId: number) {
    return this.wishlistService.getWishlist(customerId);
  }
}
