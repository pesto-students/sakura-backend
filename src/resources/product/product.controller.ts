import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }


    @Get()
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'all', enum: ["false", "true"] })
    getProducts(@Query("page") page: number, @Query("limit") limit, @Query("all") all: boolean) {
        try {
            return this.productService.getProducts(page, limit, all);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(":id")
    @ApiParam({ name: "id", required: true })
    @ApiQuery({ name: 'discountId', required: false })
    getProductById(@Param('id') productId: string, @Query("discountId") discountId: string) {
        try {
            const parsedProductId = parseInt(productId);
            const parsedDiscountId = discountId ? parseInt(discountId) : undefined;
            return this.productService.getProductById(parsedProductId, parsedDiscountId);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }


    @Get(":id/options")
    @ApiParam({ name: "id", required: true })
    getProductOptionsById(@Param('id') productId: string) {
        try {
            const parsedProductId = parseInt(productId);
            return this.productService.getProductOptions(parsedProductId);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
