import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductAttribute } from './entities/product-attribute.entity';
import { ProductAttributeValue } from './entities/product-attribute-value.entity';
import { ProductAttributeService } from './product-attribute.service';
import { ProductAttributeController } from './product-attribute.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductAttribute, ProductAttributeValue]),
    ],
    controllers: [ProductAttributeController],
    providers: [ProductAttributeService],
})
export class ProductAttributeModule {}
