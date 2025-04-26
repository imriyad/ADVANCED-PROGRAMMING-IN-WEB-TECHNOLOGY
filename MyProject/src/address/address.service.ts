// src/address/address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>,
  ) {}

  async addAddress(customerId: number, addressData) {
    const address = this.addressRepo.create({
      ...addressData,
      customer: { id: customerId },
    });
    return this.addressRepo.save(address);
  }

  async getAddresses(customerId: number) {
    return this.addressRepo.find({
      where: { customer: { id: customerId } },
    });
  }
}
