import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import { Product } from '../../product/entities/product.entity';
import { ProductAttribute } from './product-attribute.entity';

@Entity()
export class ProductAttributeValue {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product)
    product: number;

    @ManyToOne(() => ProductAttribute)
    attribute: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
