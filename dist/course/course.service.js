"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
let CourseService = class CourseService {
    constructor() {
        this.courses = [
            {
                id: 1,
                name: "Fundamentos do framework NestJS",
                description: "Testando 123",
                tags: ["node.js", "nestjs"]
            }
        ];
    }
    findAll() {
        return this.courses;
    }
    findOne(id) {
        const course = this.courses.find((course) => course.id == Number(id));
        if (!course) {
            throw new common_1.HttpException(`Course ID= ${id} Not Found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return this.courses.find((course) => course.id == Number(id));
        }
    }
    create(createCourseDto) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }
    update(id, updateCourseDto) {
        const indexCourse = this.courses.findIndex((course) => course.id == Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }
    remove(id) {
        const indexCourse = this.courses.findIndex((course) => course.id == Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)()
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map