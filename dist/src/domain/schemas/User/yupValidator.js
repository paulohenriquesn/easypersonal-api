"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const yup_1 = require("yup");
exports.userSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().email().required(),
    name: (0, yup_1.string)().required().min(4),
    cpf: (0, yup_1.string)().strict().required(),
    address: (0, yup_1.string)().required(),
    cellphone: (0, yup_1.string)().strict().required(),
});
//# sourceMappingURL=yupValidator.js.map