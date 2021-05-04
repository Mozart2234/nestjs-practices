import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/hello/')
  hello(): string {
    return 'Hello from other endpoint';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Get('products')
  getProducts(@Query() query: any) {
    const { limit, offset } = query;
    return `limit ${limit}, offset ${offset}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category ${id}, Product ${productId}`;
  }
}
