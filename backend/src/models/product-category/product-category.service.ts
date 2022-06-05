import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductCategory } from './entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategory)
        private productRepo: Repository<ProductCategory>,
    ) {}

    findAll() {
        return this.productRepo.find();
    }
}
