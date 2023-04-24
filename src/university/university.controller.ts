import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UniversityService } from './university.service';
@Controller('/api/v1/university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}
  @Get('/')
  async getAllUniversities(@Res() response) {
    const universities = await this.universityService.getAllUniversities();
    return response.status(HttpStatus.OK).json({
      message: 'All students data found successfully',
      universities,
    });
  }

  @Get('/:id')
  async getUniversity(@Res() response, @Param('id') universityId: string) {
    console.log('aaa');
    const university = await this.universityService.getUniversity(universityId);
    return response.status(HttpStatus.OK).json({
      message: 'University found successfully',
      university,
    });
  }
}
