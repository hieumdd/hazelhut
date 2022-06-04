import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('PG_HOST'),
                port: configService.get('PG_PORT'),
                database: configService.get('PG_DATABASE'),
                username: configService.get('PG_USER'),
                password: configService.get('PG_PASSWORD'),
                entities: [__dirname + '/../**/*.entity.ts'],
                synchronize: true,
                ssl: {
                    rejectUnauthorized: false,
                },
                namingStrategy: new SnakeNamingStrategy(),
            }),
        }),
    ],
})
export class DatabaseModule {}
