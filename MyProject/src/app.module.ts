import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/customer.entity';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CustomersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',        
    password: 'postgres', 
    database: 'customerdb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Load all entities dynamically
    synchronize: true,
  }), ProductsModule, CartModule, WishlistModule, OrdersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
