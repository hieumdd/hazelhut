import { Check, Column, Entity, ManyToOne } from 'typeorm';

import { Meta } from '@models/common/meta.entity';
import { Product } from './product.entity';

@Entity()
@Check('price > 0')
export class ProductVariant extends Meta {
    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(() => Product, ({ variants }) => variants)
    product: number;
}
