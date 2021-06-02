import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProductClassService } from './product-class.service';

@ApiTags('product-class')
@Controller('product-class')
export class ProductClassController {
    constructor(private productService: ProductClassService) { }

    @Get("options")
    getProductOptions() {

    }
}