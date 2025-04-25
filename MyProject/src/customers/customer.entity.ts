import { Cart } from 'src/cart/cart.entity';
import { Order } from 'src/orders/order.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => Cart, (cart) => cart.customer)
  cart: Cart[];
  
  @OneToMany(() => Wishlist, wishlist => wishlist.customer)
  wishlist: Wishlist[];  
  
  

}
