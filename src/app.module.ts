import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST || 'maildev',
        port: parseInt(process.env.MAIL_PORT || '1025'),
        ignoreTLS: true,
      },
      defaults: {
        from: '"Test" <test@example.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
