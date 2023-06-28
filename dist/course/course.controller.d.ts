import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    findAll(): import("./entities/course.entity").Course[];
    findOne(id: string): import("./entities/course.entity").Course;
    create(createCourseDto: CreateCourseDto): any;
    update(id: string, updateCourseDto: UpdateCourseDto): void;
    remove(id: string): void;
}
