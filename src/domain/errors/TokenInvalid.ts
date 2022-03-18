export class TokenInvalid extends Error {
  constructor() {
    const messageError = `Token is invalid`;
    super(messageError);
    this.name = 'TokenInvalid';
  }
}
