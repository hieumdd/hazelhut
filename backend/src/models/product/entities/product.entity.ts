import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { Meta } from '../../../models/interface/meta.entity';
import { ProductCategory } from './productCategory.entity';
import { ProductAttributeValue } from '../../product-attribute/entities/product-attribute-value.entity';

@Entity()
export class Product extends Meta {
    @Column()
    name: string;

    @ManyToOne(() => ProductCategory, ({ products }) => products)
    category: number;

    @OneToMany(() => ProductAttributeValue, ({ product }) => product)
    attribute_values: ProductAttributeValue[];
}
