import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    @ApiQuery({ name: 'match', required: false })
    getAllCategories(@Query("match") matchString: string) {
        try {
            return this.categoryService.getAllCategories(matchString);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get("top")
    getTopCategories() {
        try {
            return this.categoryService.getTopCategories();
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }


    @Get(":id")
    @ApiParam({ name: "id", required: true })
    getCategoryById(@Param("id") categoryId: number) {
        try {
            return this.categoryService.getCategoryById(categoryId);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(":id/products")
    @ApiParam({ name: "id", required: true })
    getProductsByCategoryId(@Param("id") categoryId: number) {
        try {
            return this.categoryService.getProductsByCategoryId(categoryId);
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
