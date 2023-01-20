"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCryptUtils = void 0;
const bcrypt = require("bcrypt");
class BCryptUtils {
    static async hash(str, saltOrRound) {
        let round = this.defaultSaltOrRound;
        if (saltOrRound) {
            round = saltOrRound;
        }
        return bcrypt.hash(str, round);
    }
    static async compare(str, hash) {
        return bcrypt.compare(str, hash);
    }
}
exports.BCryptUtils = BCryptUtils;
BCryptUtils.defaultSaltOrRound = 10;
//# sourceMappingURL=bcrypt.util.js.map