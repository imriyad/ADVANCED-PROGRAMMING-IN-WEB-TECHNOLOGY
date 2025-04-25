import { Wishlist } from 'src/wishlist/wishlist.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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
  
 

}
