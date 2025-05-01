import { Product } from "src/products/product.entity";
import { Cart } from "../cart/cart.entity";
import { Wishlist } from "../wishlist/wishlist.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from '../reviews/review.entity';
import { Address } from '../address/address.entity'; 
import { Order } from "src/orders/order.entity";
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ default: 'temp_password' })
 password: string;

  @OneToMany(() => Cart, (cart) => cart.customer)
  cart: Cart[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.customer)
  wishlist: Wishlist[];

  @OneToMany(() => Review, (review) => review.customer)
 reviews: Review[];

 @OneToMany(() => Address, (address) => address.customer)
 addresses: Address[];

 @OneToMany(() => Order, (order) => order.customer)
orders: Order[];

  
}
