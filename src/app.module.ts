import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UniversityModule } from './university/university.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path/posix';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/unighana'),
    UserModule,
    UniversityModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
