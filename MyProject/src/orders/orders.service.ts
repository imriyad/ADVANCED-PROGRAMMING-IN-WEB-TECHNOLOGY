import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Customer } from 'src/customers/customer.entity';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,

    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,

    private readonly emailService: EmailService,
  ) {}

  async createOrder(customerId: number, totalPrice: number) {
    const customer = await this.customerRepo.findOneBy({ id: customerId });

    if (!customer) {
      throw new NotFoundException(`Customer with ID ${customerId} not found`);
    }

    const order = this.orderRepo.create({
      customer,
      totalPrice,
      status: 'pending',
    });

    const savedOrder = await this.orderRepo.save(order);
  //  console.log('Saved Order:', savedOrder); 

    return savedOrder;
  }

  async confirmOrder(orderId: number) {
    const order = await this.orderRepo.findOne({
      where: { id: orderId },
      relations: ['customer'],
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    order.status = 'confirmed';
    await this.orderRepo.save(order);

    await this.emailService.sendOrderConfirmation(order.customer.email);

    return order;
  }

  async findAll() {
    return this.orderRepo.find({ relations: ['customer'] });
  }
}
