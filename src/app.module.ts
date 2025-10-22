import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'maildev',  // el nombre del servicio de MailDev en docker-compose
        port: 1025,
        ignoreTLS: true
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
