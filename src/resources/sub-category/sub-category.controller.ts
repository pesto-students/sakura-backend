import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SubCategoryService } from './sub-category.service';

@ApiTags('sub-category')
@Controller('sub-category')
export class SubCategoryController {
    constructor(private subCategoryService: SubCategoryService) { }

    @Get(":id/product")
    @ApiParam({ name: "id", required: true })
    async getProductsInSubcategory(@Param("id") id: string) {
        try {
            const subCategoryId = parseInt(id);
            const products = await this.subCategoryService.getProductsInSubCategory(subCategoryId);
            return products;
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }

    }
}