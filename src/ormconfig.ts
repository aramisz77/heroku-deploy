import 'dotenv/config';
import "reflect-metadata"
import { DataSource } from 'typeorm';


export default new DataSource({
  migrationsTableName: 'migrations',
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT as any,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: process.env.TYPEORM_LOGGING === 'true',
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  entities: [process.cwd() + '/dist/database/**/*.entity.{.ts,.js}'],
  migrations: [process.cwd() + '/dist/database/migration/*{.ts,.js}'],
  subscribers: [process.cwd() + '/dist/database/subscriber/**/*{.ts,.js}'],
});

