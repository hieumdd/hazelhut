import { Column, Entity, OneToMany } from 'typeorm';

import { Meta } from '../../../models/interface/meta.entity';
import { Product } from './product.entity';

@Entity()
export class ProductCategory extends Meta {
    @Column()
    name: string;

    @OneToMany(() => Product, ({ category }) => category)
    products: Product[];
}
