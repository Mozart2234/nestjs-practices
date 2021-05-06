import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('id') id: string): any {
    response.status(HttpStatus.ACCEPTED).send({ id });
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
