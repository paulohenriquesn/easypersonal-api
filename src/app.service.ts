import { Injectable } from '@nestjs/common';
import { sendEmail } from '@providers/email/sendEmail';
import { EmailRegisterView } from '@providers/email/views/EmailRegisterView';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await sendEmail(
      'contato@paulohenriquesn.com',
      EmailRegisterView('Paulo Henrique'),
    );
    return 'Hello World!';
  }
}
