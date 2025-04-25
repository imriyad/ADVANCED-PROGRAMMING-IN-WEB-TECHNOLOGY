import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customerRepo: Repository<Customer>,
      ) {}


      saveData(data)
    {
       this.customerRepo.save(data)
    }
    allData()
    {
        return this.customerRepo.find()
    }
    getId(id)
    {
        return this.customerRepo.findOne({where:{id}})
    }
    deleteId(id){
        this.customerRepo.delete(id)
        return "Deleted"
    }
    async updateData(id,data)
    {
        const a=await this.customerRepo.findOne({where:{id}})
        if(!a)
        {
             return " Not Found"
        }
        else{
            const d=Object.assign(a,data)
            this.customerRepo.save(d)
            return "Updated"
        }
    }

}
