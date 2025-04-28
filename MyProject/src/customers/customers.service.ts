import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
    private jwtService: JwtService,
  ) {}

  async saveData(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
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

  /*async updateData(id, data) {
    const existing = await this.customerRepo.findOne({ where: { id } });
    if (!existing) {
      return 'Not Found';
    }
  }*/

  async login(email: string, password: string) {
    const customer = await this.customerRepo.findOne({ where: { email } });
    if (!customer) {
      throw new UnauthorizedException('Invalid credentials (email)');
    }

    const isPasswordMatch = await bcrypt.compare(password, customer.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials (password)');
    }

    const payload = { id: customer.id, email: customer.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'Login Successful!',
      token,
    };
  }

  async createCustomer(name: string, email: string, phone: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = this.customerRepo.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
  
    return this.customerRepo.save(customer);
  }
  
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async updateData(id: number, data: { name?: string; email?: string; phone?: string; password?: string }) {
    const customer = await this.customerRepo.findOne({ where: { id } });
    if (!customer) {
      throw new UnauthorizedException('Customer not found');
    }

    if (data.password) {
      customer.password = data.password;
    }

    if (data.name) customer.name = data.name;
    if (data.email) customer.email = data.email;
    if (data.phone) customer.phone = data.phone;

    await this.customerRepo.save(customer);

    return { message: 'Customer updated successfully' };
  }
}
  

