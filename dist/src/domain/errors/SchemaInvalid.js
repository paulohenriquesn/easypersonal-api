"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaInvalid = void 0;
class SchemaInvalid extends Error {
    constructor() {
        const messageError = `Schema Invalid`;
        super(messageError);
        this.name = 'SchemaInvalid';
    }
}
exports.SchemaInvalid = SchemaInvalid;
//# sourceMappingURL=SchemaInvalid.js.map