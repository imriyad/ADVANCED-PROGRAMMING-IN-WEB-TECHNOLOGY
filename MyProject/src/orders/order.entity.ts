import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from 'src/customers/customer.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string; 

  @Column('decimal')
  totalPrice: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
}
