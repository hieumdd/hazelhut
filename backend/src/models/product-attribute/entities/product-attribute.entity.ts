import { Column, Entity, OneToMany } from 'typeorm';

import { Meta } from '@models/common/meta.entity';
import { ProductAttributeValue } from './product-attribute-value.entity';

@Entity()
export class ProductAttribute extends Meta {
    @Column()
    name: string;

    @OneToMany(() => ProductAttributeValue, ({ attribute }) => attribute)
    attributeValues: ProductAttribute[];
}
