import { Customer } from 'src/customers/customer.entity';
import { Product } from 'src/products/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  quantity: number;
}
