"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
var common_1 = require("@nestjs/common");
var course_controller_1 = require("./course.controller");
var course_service_1 = require("./course.service");
var typeorm_1 = require("@nestjs/typeorm");
var course_entity_1 = require("./entities/course.entity");
var CourseModule = /** @class */ (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course])],
            controllers: [course_controller_1.CourseController],
            providers: [course_service_1.CourseService]
        })
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map