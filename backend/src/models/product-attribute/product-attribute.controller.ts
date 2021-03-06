import { Controller, Get } from '@nestjs/common';
import { ProductAttributeService } from './product-attribute.service';

@Controller('product-attribute')
export class ProductAttributeController {
    constructor(
        private readonly productAttributeService: ProductAttributeService,
    ) {}

    @Get()
    findAll() {
        return this.productAttributeService.findAll();
    }
}
