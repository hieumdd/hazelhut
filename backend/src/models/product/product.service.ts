import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>,
    ) {}

    create(product: CreateProductDto) {
        return this.productRepo.save(product);
    }

    findAll() {
        return this.productRepo.find();
    }

    findOne(id: number) {
        return this.productRepo.findOneBy({ id });
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        return this.findOne(id).then((product) =>
            this.productRepo.save({ ...product, ...updateProductDto }),
        );
    }

    async remove(id: number) {
        return this.findOne(id).then((product) =>
            this.productRepo.remove(product),
        );
    }
}
