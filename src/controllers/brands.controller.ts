import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'Update Brands';
  }

  @Get(':id')
  getBrand(@Param('id') id: number): string {
    return `This is my ID -> ${id}`;
  }
}
