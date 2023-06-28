import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(Course)
        private readonly courserepository: Repository<Course>
    ) {
    }

    findAll() {
        return this.courserepository.find();
    }

    findOne(id: string){
        const course = this.courserepository.findOne({where: {id: parseInt(id)}})
        //const course =   this.courserepository.findOne(id);
        if(!course) {
            throw new NotFoundException(`Course ID= ${id} Not Found`)
        }
        return course;
    }

    create(createCourseDto: CreateCourseDto){
        const course = this.courserepository.create(createCourseDto);
        return this.courserepository.save(course);
    }

    async update(id: string, updateCourseDto:UpdateCourseDto) {
        const course = await this.courserepository.preload({
            id:+id,
            ...updateCourseDto,
        })
        if (!course) {
            throw new NotFoundException(`Course ID= ${id} Not Found`)
        }
        return this.courserepository.save(course);
    }

    async remove(id: string) {
        const course = this.courserepository.findOne({where: {id: parseInt(id)}})
        return this.courserepository.delete(id);
    }
}
