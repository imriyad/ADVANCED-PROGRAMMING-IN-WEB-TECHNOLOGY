import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':customerId')
  addAddress(
    @Param('customerId') customerId: number,
    @Body() body: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    },
  ) {
    return this.addressService.addAddress(customerId, body);
  }

  @Get(':customerId')
  getAddresses(@Param('customerId') customerId: number) {
    return this.addressService.getAddresses(customerId);
  }
}
