import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../customers/customer.entity';
import { Product } from '../products/product.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number; // 1 to 5

  @Column()
  comment: string;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}
