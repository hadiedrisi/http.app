import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  
  constructor(
    @Inject('TCP_SERVICE') private client:ClientProxy,
    @Inject('TCP_ROLE_SERVICE') private client2:ClientProxy
  ){}
  async accumulate() {
    const pattern = {cmd:'sum'};
    const payload = [1,2,3,4,5,6];
    return this.client.send<number,number []>(pattern,payload);
  }
  async getRoles(){
    const pattern = {cmd:'get_all_role'};
    return this.client2.send<any>(pattern,{});
  }


  
}
