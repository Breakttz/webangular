import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://danielsotelol:ZngQDl4Q48JrenRH@web2023.7itat8f.mongodb.net/web2023')],
  })
export class DatabaseModule {}
