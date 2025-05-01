import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Param, Delete, Patch } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from 'src/DTO/customer.dto';
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}


  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  saveData(@Body() data: CreateCustomerDto) {
    return this.customersService.saveData(data);
  }
  @Get()
  allData() {
    return this.customersService.allData();
  }

  @Get(':id')
  getId(@Param('id') id) {
    return this.customersService.getId(id);
  }

  @Delete('deletebyId/:id')
  deleteId(@Param('id') id) {
    return this.customersService.deleteId(id);
  }

  @Patch('update/:id')
  async updateData(@Param('id') id: number, @Body() data: { name?: string; email?: string; phone?: string; password?: string }) {
    if (data.password) {
      const hashedPassword = await this.customersService.hashPassword(data.password);
      data.password = hashedPassword;
    }

    return this.customersService.updateData(id, data);
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    return this.customersService.login(email, password);
  }
  
}
