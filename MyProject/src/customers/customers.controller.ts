
import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Param ,Delete, Patch} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
      constructor(private readonly customersService: CustomersService) {}
    
      
     @Post()
     @UsePipes(ValidationPipe)
     saveData(@Body() data)
     {
        return  this.customersService.saveData(data)
     }
     
     @Get()
     allData()
     {
        return this.customersService.allData()
     }

     @Get(':id')
     getId(@Param('id')id)
     {
      return this.customersService.getId(id)
     }
     @Delete('deletebyId/:id')
     deleteId(@Param('id')id)
     {
      return this.customersService.deleteId(id)

     }
     @Patch('update/:id')
     updateData(@Param('id')id, @Body() data)
     {
      return this.customersService.updateData(id,data)

     }

     
      
}
