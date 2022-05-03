import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as Casual from 'casual';
import { User } from './user.class';

@Injectable()
export class UsersService {
  private userbase = [];

  constructor() {
    this.mockUserbase();
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    console.log('findall');
    return this.userbase;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  
  convertMsToMinutesSeconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
  
    return minutes + ':'+ seconds;
  }

  mockUserbase() {
    const start = new Date().getTime();
    for (let i = 0; i < 100000; i++) {
      const user: User = {
        name: Casual.first_name,
        surname: Casual.last_name,
        address: Casual.street,
        phone: Casual.phone,
        email: Casual.email,
        postalCode: Casual.zip,
        city: Casual.city,
        number: Casual.building_number,
        id: Casual.uuid,
      };
      this.userbase.push(user);
    }
    const end = new Date().getTime();
    const elapsed = this.convertMsToMinutesSeconds(end - start);
    console.log('finished userbase creation('+this.userbase.length+' records) in ' + elapsed + ' (MIN:SEC)');
  }
}
