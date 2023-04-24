import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { University, UniversityDocument } from 'src/model/university.schema';
@Injectable()
export class UniversityService {
  constructor(
    @InjectModel(University.name)
    private universityModel: Model<UniversityDocument>,
  ) {}

  async getAllUniversities(): Promise<University[]> {
    const universities = await this.universityModel.find();
    if (!universities || universities.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return universities;
  }

  async getUniversity(university_id: string): Promise<University> {
    const university = await this.universityModel.findById(university_id);
    return university;
  }
}
