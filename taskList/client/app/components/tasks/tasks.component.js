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
var core_1 = require("@angular/core");
var task_services_1 = require("../../services/task.services");
var TaskComponent = (function () {
    function TaskComponent(taskservice) {
        var _this = this;
        this.taskservice = taskservice;
        this.taskservice.getTasks().subscribe(function (tasks) { _this.tasks = tasks; });
    }
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'task.component.html'
    }),
    __metadata("design:paramtypes", [task_services_1.TaskServices])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=tasks.component.js.map