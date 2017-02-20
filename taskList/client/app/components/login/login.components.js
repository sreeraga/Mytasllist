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
var login_service_1 = require("../../services/login.service");
var router_1 = require("@angular/router");
var LoginComponents = (function () {
    //login:Login;
    function LoginComponents(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    LoginComponents.prototype.authentication = function (username, password) {
        var _this = this;
        console.log('inside authenticaaaaa' + this.username + this.password);
        this.loginservice.getAuth(this.username, this.password).subscribe(function (user) {
            _this.user = user;
            console.log('outputtttt' + _this.user.name);
            if (_this.user != null) {
                console.log('inside if ');
                _this.router.navigate(['/home', _this.username]);
                console.log('inside if ' + _this.username);
            }
        });
        // this.router.navigate(['/Home',this.username]);
        //.subscribe(login=>{console.log(' loooooooo'+login.name)})
    };
    return LoginComponents;
}());
LoginComponents = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.screen.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginServices, router_1.Router])
], LoginComponents);
exports.LoginComponents = LoginComponents;
//# sourceMappingURL=login.components.js.map