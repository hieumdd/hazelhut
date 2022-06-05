import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { Meta } from '@models/common/meta.entity';
import { ProductCategory } from '@models/product-category/entities/product-category.entity';
import { ProductAttributeValue } from '@models/product-attribute/entities/product-attribute-value.entity';
import { ProductVariant } from './product-variant.entity';

@Entity()
export class Product extends Meta {
    @Column()
    name: string;

    @ManyToOne(() => ProductCategory, ({ products }) => products)
    category: number;

    @OneToMany(() => ProductAttributeValue, ({ product }) => product)
    attribute_values: ProductAttributeValue[];

    @OneToMany(() => ProductVariant, ({ id }) => id)
    variants: ProductVariant[];
}
