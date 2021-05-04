import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Get('')
  getProducts(@Query() query: any) {
    const { limit, offset } = query;
    return { message: `limit ${limit}, offset ${offset}` };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'accion de crear', payload };
  }
}
