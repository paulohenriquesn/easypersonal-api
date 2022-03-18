export class YouArentTrainer extends Error {
  constructor() {
    const messageError = `You are not a trainer to do that`;
    super(messageError);
    this.name = 'YouArentTrainer';
  }
}
