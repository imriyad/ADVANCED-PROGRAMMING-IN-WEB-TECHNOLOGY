import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
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
    if (!data.email || !data.password || !data.name || !data.phone) {
      throw new BadRequestException('All fields (name, email, phone, password) are required');
    }
  
    const existing = await this.customerRepo.findOne({ where: { email: data.email } });
    if (existing) {
      throw new BadRequestException('Email already exists');
    }
  
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    return this.customerRepo.save(data);
  }
  

  allData() {
    return this.customerRepo.find();
  }

  getId(id: number) {
    return this.customerRepo.findOne({ where: { id } });
  }

  async deleteId(id: number) {
    await this.customerRepo.delete(id);
    return 'Deleted';
  }

  async login(email: string, password: string) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

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
    if (!name || !email || !phone || !password) {
      throw new BadRequestException('All fields (name, email, phone, password) are required');
    }

    const existingCustomer = await this.customerRepo.findOne({ where: { email } });
    if (existingCustomer) {
      throw new BadRequestException('Email already exists');
    }

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

    if (data.email !== undefined && !data.email) {
      throw new BadRequestException('Email cannot be empty');
    }
    if (data.name !== undefined && !data.name) {
      throw new BadRequestException('Name cannot be empty');
    }
    if (data.phone !== undefined && !data.phone) {
      throw new BadRequestException('Phone cannot be empty');
    }
    if (data.password !== undefined && !data.password) {
      throw new BadRequestException('Password cannot be empty');
    }

    if (data.password) {
      customer.password = await this.hashPassword(data.password);
    }
    if (data.name) customer.name = data.name;
    if (data.email) customer.email = data.email;
    if (data.phone) customer.phone = data.phone;

    await this.customerRepo.save(customer);

    return { message: 'Customer updated successfully' };
  }
}
