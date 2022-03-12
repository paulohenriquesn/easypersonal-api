export class SchemaInvalid extends Error {
  constructor() {
    const messageError = `Schema Invalid`
    super(messageError);
    this.name = 'SchemaInvalid'
  }
}