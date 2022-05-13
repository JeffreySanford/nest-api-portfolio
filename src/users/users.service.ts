import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as Casual from 'casual';
import { User } from './user.class';

@Injectable()
export class UsersService {
  private userbase: User[] = [];
  userbaseSize: number;

  constructor() {
    this.mockUserbase(100000);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  updateUserbase(size: number): User[] {
    console.log('update with '+size);
    this.userbase = this.mockUserbase(size);
    return this.userbase;
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
  
  convertMsToMinutesSeconds(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
  
    return minutes + ':'+ seconds;
  }

  mockUserbase(size: number): User[] {
    const start = new Date().getTime();
    console.log('mock '+ size)
    for (let i = 0; i < size; i++) {
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

    return this.userbase;
  }
}
