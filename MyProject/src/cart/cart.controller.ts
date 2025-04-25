// src/cart/cart.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() data: AddToCartDto) {
    return this.cartService.addToCart(data);
  }

  @Get(':customerId')
  getCart(@Param('customerId') customerId: number) {
    return this.cartService.getCartByCustomer(customerId);
  }

  @Patch('update/:cartId')
  updateQuantity(@Param('cartId') cartId: number, @Body('quantity') quantity: number) {
    return this.cartService.updateQuantity(cartId, quantity);
  }

  @Delete(':cartId')
  remove(@Param('cartId') cartId: number) {
    return this.cartService.removeFromCart(cartId);
  }

  // src/cart/cart.controller.ts

@Delete('clear/:customerId')
clearCart(@Param('customerId') customerId: number) {
  return this.cartService.clearCart(customerId);
}


}
