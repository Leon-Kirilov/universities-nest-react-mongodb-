import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

class Student {
  @Prop()
  total_count: number;
  @Prop()
  male_count: number;
  @Prop()
  female_count: number;
  @Prop()
  international_count: number;
}

export type UniversityDocument = University & Document;
@Schema()
export class University {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({ type: mongoose.Types.Array })
  colleges: [
    {
      title: string;
      faculties: string[];
    },
  ];
  @Prop()
  student: Student;
}
export const UniversitySchema = SchemaFactory.createForClass(University);
