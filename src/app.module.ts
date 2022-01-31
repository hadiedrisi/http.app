import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([{
      name:'TCP_SERVICE',
      transport:Transport.TCP,
      options:{
        host: '127.0.0.1',
        port: 8003
      }
    },{
      name:'TCP_ROLE_SERVICE',
      transport:Transport.TCP,
      options:{
        host: '192.168.5.51',
        port: 8585
      }
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
