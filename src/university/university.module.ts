import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitySchema } from 'src/model/university.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'University', schema: UniversitySchema },
    ]),
  ],
  providers: [UniversityService],
  controllers: [UniversityController],
  exports: [UniversityService],
})
export class UniversityModule {}
