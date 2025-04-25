import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from 'src/customers/customer.entity'; // Import Customer Entity
import { Product } from 'src/products/product.entity'; // Import Product Entity

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.wishlist)
  @JoinColumn({ name: 'customer_id' }) // This sets the foreign key column for customer
  customer: Customer;

  @ManyToOne(() => Product, product => product.wishlist)
  @JoinColumn({ name: 'product_id' }) // This sets the foreign key column for product
  product: Product;
}
