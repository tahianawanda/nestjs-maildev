import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async sendTestMail(to: string) {
    return this.mailerService.sendMail({
      to,
      subject: 'Prueba de MailDev',
      text: '¡Hola! Este es un mail de prueba desde NestJS.',
    });
  }
}
