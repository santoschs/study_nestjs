"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
var common_1 = require("@nestjs/common");
var course_service_1 = require("./course.service");
var create_course_dto_1 = require("./dto/create-course.dto");
var update_course_dto_1 = require("./dto/update-course.dto");
var CourseController = /** @class */ (function () {
    function CourseController(courseService) {
        this.courseService = courseService;
    }
    CourseController.prototype.findAll = function () {
        return this.courseService.findAll();
    };
    CourseController.prototype.findOne = function (id) {
        return this.courseService.findOne(id);
    };
    CourseController.prototype.create = function (createCourseDto) {
        return this.courseService.create(createCourseDto);
    };
    CourseController.prototype.update = function (id, updateCourseDto) {
        return this.courseService.update(id, updateCourseDto);
    };
    CourseController.prototype.remove = function (id) {
        return this.courseService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CourseController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CourseController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDto]),
        __metadata("design:returntype", void 0)
    ], CourseController.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_course_dto_1.UpdateCourseDto]),
        __metadata("design:returntype", void 0)
    ], CourseController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CourseController.prototype, "remove", null);
    CourseController = __decorate([
        (0, common_1.Controller)('courses'),
        __metadata("design:paramtypes", [course_service_1.CourseService])
    ], CourseController);
    return CourseController;
}());
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map