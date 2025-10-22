import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async sendTestMail(to: string, subject: string, text: string) {
    return this.mailerService.sendMail({
      to,
      subject,
      text,
    });
  }
}
