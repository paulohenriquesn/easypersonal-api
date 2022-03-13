import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { sendEmail as ISendEmail } from '@interfaces/sendEmail';
import { sendEmail } from './sendEmail';

describe('sendEmail', () => {
  it('should throws if no email is provided', async () => {
    let thrownError;
    try {
      const request = <ISendEmail>{
        content: 'Hello',
      };
      await sendEmail(request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('to'));
  });

  it('should throws if no content is provided', async () => {
    let thrownError;
    try {
      const request = {
        to: 'paulo@gmail.com',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail(request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new MissingParamError('content'));
  });
  it('should throws if email is invalid', async () => {
    let thrownError;
    try {
      const request = {
        to: 'paulo',
        content: 'ola',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await sendEmail(request);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(new ParamInvalid('to'));
  });
});
