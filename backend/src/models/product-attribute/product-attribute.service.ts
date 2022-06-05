import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductAttribute } from './entities/product-attribute.entity';

@Injectable()
export class ProductAttributeService {
    constructor(
        @InjectRepository(ProductAttribute)
        private productRepo: Repository<ProductAttribute>,
    ) {}

    findAll() {
        return this.productRepo.find();
    }
}
