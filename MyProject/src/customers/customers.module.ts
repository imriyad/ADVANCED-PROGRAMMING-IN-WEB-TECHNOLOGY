import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    JwtModule.register({
      secret: 'mahdi',  
      signOptions: { expiresIn: '1d' }, 
    }),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
