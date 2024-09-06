import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/appConfig.ts';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/item.entity.js';
import { ItemModule } from './item/item.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [Item],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
