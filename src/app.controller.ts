import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sum')
  async getHello(): Promise<any> {
    return this.appService.accumulate();
  }
  @Get()
  async getRoles():Promise<any>{
    return this.appService.getRoles()
  }
}
