import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
<<<<<<< HEAD
import { User } from '../user.class';


@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
=======
import { Subject } from 'rxjs';
import { User } from './user.class';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
>>>>>>> 76472128049d71924f54702e22b3ebe892c2de1a

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Array<User> {
    console.log('return userbase');
    const userbase = this.usersService.findAll();
    return userbase;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
