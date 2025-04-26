import { Customer } from 'src/customers/customer.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Review } from '../reviews/review.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  stock: number;

  @OneToMany(() => Wishlist, wishlist => wishlist.product)  
  wishlist: Wishlist[];

  @OneToMany(() => Review, (review) => review.product)
reviews: Review[];

}
