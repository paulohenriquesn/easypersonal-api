import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { IMailView as ISendEmail } from '@interfaces/sendEmail';
import { sendEmail } from './sendEmail';

describe('sendEmail', () => {
  it('should throws if no email is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hello',
        subject: 'Hi',
        text: 'how are you?',
        html: '<h1>are you fine?</h1>',
      };
      await sendEmail('', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('to'));
  });

  it('should throws if no content is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        subject: 'Hi',
        text: 'how are you?',
        html: '<h1>are you fine?</h1>',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail('contato@paulohenriquesn.com', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('content'));
  });
  it('should throws if email is invalid', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hello',
        subject: 'Hi',
        text: 'how are you?',
        html: '<h1>are you fine?</h1>',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail('hi', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new ParamInvalid('to'));
  });
  it('should throws if no subject is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hi',
        text: 'how are you?',
        html: '<h1>are you fine?</h1>',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail('contato@paulohenriquesn.com', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('subject'));
  });
  it('should throws if no text is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hi',
        subject: 'Hi',
        html: '<h1>are you fine?</h1>',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail('contato@paulohenriquesn.com', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('text'));
  });
  it('should throws if no html is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hi',
        subject: 'Hi',
        text: 'hey',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail('contato@paulohenriquesn.com', request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('html'));
  });
});
