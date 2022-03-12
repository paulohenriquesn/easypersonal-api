export class MissingParamError extends Error {
  constructor(param: string) {
    const messageError = `Missing Param: ${param}`
    super(messageError);
    this.name = 'MissingParamError'
  }
}