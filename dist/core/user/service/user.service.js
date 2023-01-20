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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../../entity/user.entity");
const user_repository_1 = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findById(id) {
        return this.userRepository.findOne(id);
    }
    findByIdWithGift(userId) {
        return this.userRepository.findByIdWithGift(userId);
    }
    findByEmail(email) {
        return this.userRepository.findOne({ where: { email: email } });
    }
    async createNewUser(user) {
        if (user.password == '' || user.password == null) {
            user.password = uuid_1.v4();
        }
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        return this.userRepository.save(user);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map