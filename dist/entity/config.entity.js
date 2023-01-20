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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigApp = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let ConfigApp = class ConfigApp {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, my_key: { required: true, type: () => String }, my_value: { required: true, type: () => String }, data_type: { required: true, type: () => String } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ConfigApp.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ConfigApp.prototype, "my_key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ConfigApp.prototype, "my_value", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ConfigApp.prototype, "data_type", void 0);
ConfigApp = __decorate([
    typeorm_1.Entity({ name: "config_app" })
], ConfigApp);
exports.ConfigApp = ConfigApp;
//# sourceMappingURL=config.entity.js.map