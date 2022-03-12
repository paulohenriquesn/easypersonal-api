export class ParamInvalid extends Error {
  constructor(param: string) {
    const messageError = `Param Invalid: ${param}`
    super(messageError);
    this.name = 'Param Invalid'
  }
}