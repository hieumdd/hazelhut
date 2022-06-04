import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './models/product/product.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                PG_HOST: Joi.string().required(),
                PG_PORT: Joi.number().required(),
                PG_USER: Joi.string().required(),
                PG_PASSWORD: Joi.string().required(),
                PG_DATABASE: Joi.string().required(),
            }),
        }),
        DatabaseModule,
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
