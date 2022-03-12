export class TokenInvalid extends Error {
  constructor() {
    const messageError = `Google token is invalid`
    super(messageError);
    this.name = 'TokenInvalid'
  }
}