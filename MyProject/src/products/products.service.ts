import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    const newProduct = this.productRepo.create(dto);
    return this.productRepo.save(newProduct);
  }

  async findAll(minPrice?: number, maxPrice?: number) {
    const queryBuilder = this.productRepo.createQueryBuilder('product');

    if (minPrice) {
      queryBuilder.andWhere('product.price >= :minPrice', { minPrice });
    }

    if (maxPrice) {
      queryBuilder.andWhere('product.price <= :maxPrice', { maxPrice });
    }

    return queryBuilder.getMany();
  }

  findOne(id: number) {
    return this.productRepo.findOneBy({ id });
  }

  delete(id: number) {
    return this.productRepo.delete(id);
  }
}
