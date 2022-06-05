import { Column, Entity, OneToMany } from 'typeorm';

import { Meta } from '@models/common/meta.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductCategory extends Meta {
    @Column()
    name: string;

    @OneToMany(() => Product, ({ category }) => category)
    products: Product[];
}
