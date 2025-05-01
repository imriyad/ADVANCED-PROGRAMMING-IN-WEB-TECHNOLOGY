import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { Customer } from 'src/customers/customer.entity';
import { EmailModule } from 'src/email/email.module';
import { CartModule } from 'src/cart/cart.module'; // ✅ import this

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Customer]),
    EmailModule,
    CartModule, // ✅ add this
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
