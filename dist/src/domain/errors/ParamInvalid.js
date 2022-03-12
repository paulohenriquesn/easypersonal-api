"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamInvalid = void 0;
class ParamInvalid extends Error {
    constructor(param) {
        const messageError = `Param Invalid: ${param}`;
        super(messageError);
        this.name = 'Param Invalid';
    }
}
exports.ParamInvalid = ParamInvalid;
//# sourceMappingURL=ParamInvalid.js.map