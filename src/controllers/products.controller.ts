import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Get('')
  getProducts(@Query() query: any) {
    const { limit, offset } = query;
    return `limit ${limit}, offset ${offset}`;
  }
}
