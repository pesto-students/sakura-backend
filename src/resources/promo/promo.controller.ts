import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PromoService } from "./promo.service";

@ApiTags('promo')
@Controller('promo')
export class PromoController {
    constructor(private promoService: PromoService) { }

    @Get("exclusive")
    async getExclusiveDeals() {
        try {
            const exclusiveDeals = await this.promoService.getActiveExclusiveDeals();
            return exclusiveDeals;
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get("hot-deal")
    async getHotDeals() {
        try {
            const hotDeals = await this.promoService.getActiveHotDeals();
            return hotDeals;
        } catch (error) {
            //TODO: Need to handle error types
            throw new HttpException({
                message: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
