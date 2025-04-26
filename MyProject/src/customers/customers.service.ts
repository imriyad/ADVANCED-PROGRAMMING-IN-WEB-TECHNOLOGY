import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
  ) {}

  async saveData(data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10); // Hash password if present
    }
    return this.customerRepo.save(data);
  }

  allData() {
    return this.customerRepo.find();
  }

  getId(id) {
    return this.customerRepo.findOne({ where: { id } });
  }

  async deleteId(id) {
    await this.customerRepo.delete(id);
    return 'Deleted';
  }

  async updateData(id, data) {
    const existing = await this.customerRepo.findOne({ where: { id } });
    if (!existing) {
      return 'Not Found';
    }
  }
}
