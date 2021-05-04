import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

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

  @Delete(':id')
  destroy(@Param('id') id: number): any {
    return {
      id,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any): any {
    return {
      id,
      payload,
    };
  }
}
