import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {

    constructor(private readonly courseService:CourseService) {
        
    }
    
    @Get()
    findAll() {
        return this.courseService.findAll()
        
    }
    @Get(':id')
    findOne(@Param('id')id: string) {
        return this.courseService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create (@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }
    
    @Patch(':id')
    update(@Param('id')id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.update(id,updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id')id: string) {
        return this.courseService.remove(id);
    }
}
