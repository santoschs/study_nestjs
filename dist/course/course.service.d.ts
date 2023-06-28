import { Course } from './entities/course.entity';
export declare class CourseService {
    private courses;
    findAll(): Course[];
    findOne(id: string): Course;
    create(createCourseDto: any): any;
    update(id: string, updateCourseDto: any): void;
    remove(id: string): void;
}
