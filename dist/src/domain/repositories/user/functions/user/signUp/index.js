"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const index_1 = require("../../../../../errors/index");
const http_helper_1 = require("../../../../../helpers/http-helper");
const yupValidator_1 = require("../../../../../schemas/User/yupValidator");
const cpfValidator_1 = require("../../../../../utils/cpfValidator");
async function signUp(request) {
    const requiredFields = [
        "email",
        "name",
        "cpf",
        "address",
        "cellphone"
    ];
    for (const field of requiredFields) {
        if (request.body[field] === undefined) {
            return (0, http_helper_1.badRequest)(new index_1.MissingParamError(field));
        }
    }
    if (!yupValidator_1.userSchema.isValidSync(request.body)) {
        return (0, http_helper_1.badRequest)(new index_1.SchemaInvalid());
    }
    if (!(0, cpfValidator_1.cpfValidator)(request.body.cpf)) {
        return (0, http_helper_1.badRequest)(new index_1.ParamInvalid('cpf'));
    }
    return {
        statusCode: 200,
    };
}
exports.signUp = signUp;
//# sourceMappingURL=index.js.map