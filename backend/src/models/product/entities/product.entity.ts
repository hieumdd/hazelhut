import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { ProductCategory } from './productCategory.entity';
import { ProductAttributeValue } from '../../product-attribute/entities/product-attribute-value.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => ProductCategory, ({ products }) => products)
    category: number;

    @OneToMany(() => ProductAttributeValue, ({ product }) => product)
    attribute_values: ProductAttributeValue[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
