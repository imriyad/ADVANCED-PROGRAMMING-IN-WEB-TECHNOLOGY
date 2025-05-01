import { Controller, Post, Body, Get, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // Create a new product
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  // Get all products or filter by price range
  @Get()
  findAll(@Query('minPrice') minPrice?: number, @Query('maxPrice') maxPrice?: number) {
    return this.productService.findAll(minPrice, maxPrice);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
