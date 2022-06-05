import { Column, Entity, ManyToOne } from 'typeorm';

import { Meta } from '@models/common/meta.entity';
import { Product } from '@models/product/entities/product.entity';
import { ProductAttribute } from './product-attribute.entity';

@Entity()
export class ProductAttributeValue extends Meta {
    @ManyToOne(() => Product)
    product: number;

    @ManyToOne(() => ProductAttribute)
    attribute: number;

    @Column()
    value: string;
}
