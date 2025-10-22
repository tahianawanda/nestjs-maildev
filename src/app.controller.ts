import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('send-mail')
  async sendMail(@Body() body: { to: string, subject: string; text: string }) {
    if (!body.to || !body.subject || !body.text) {
      return { error: 'Los campos "to", "subject" y "text" son requeridos' };
    }
    await this.appService.sendTestMail(body.to, body.subject, body.text);
    return { message: `Mail enviado a ${body.to}` };
  }
}