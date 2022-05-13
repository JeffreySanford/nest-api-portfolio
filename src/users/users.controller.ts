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
import { User } from './user.class';


@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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

  @Patch(':name')
  update(@Param('size') size: number, @Body() updateInventoryDto: UpdateUserDto) {
      return this.updateUserbase(size);
  }

  updateUserbase(size: number): User[] {
    return this.usersService.updateUserbase(size);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
