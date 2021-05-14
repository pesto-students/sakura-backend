import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    
    
    @Get()
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'all', enum: ["false", "true"] })
    getProducts(@Query("page") page: number, @Query("limit") limit, @Query("all") all: boolean) {
        return this.productService.getProducts(page, limit, all);
        // throw new HttpException({
        //     message: 'This is a custom message',
        // }, HttpStatus.FORBIDDEN);
    }
}
