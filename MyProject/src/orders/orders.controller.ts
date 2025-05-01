import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/DTO/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(dto.customerId, dto.totalPrice);
  }

  @Post(':id/confirm')
  confirm(@Param('id') id: number) {
    return this.ordersService.confirmOrder(+id);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
}
