import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('send-mail')
  async sendMail(@Body() body: { to: string }) {
    if (!body.to) {
      return { error: 'El campo "to" es requerido' };
    }
    await this.appService.sendTestMail(body.to);
    return { message: `Mail enviado a ${body.to}` };
  }
}