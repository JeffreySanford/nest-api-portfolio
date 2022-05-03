import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as casual from 'casual';

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

  mockUserbase() {
    casual.define('user', function () {
      return {
        name: casual.first_name,
        surname: casual.last_name,
        address: casual.street,
        phone: casual.phone,
        email: casual.email,
        postalCode: casual.zip,
        city: casual.city,
        number: casual.building_number,
        id: casual.uuid,
      };
    });

    for (let i = 0; i < 100000; i++) {
      this.userbase.push(casual);
    }
  }
}
