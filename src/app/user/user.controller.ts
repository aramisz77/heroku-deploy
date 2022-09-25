import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "../../database/entity/user.entity";
import { UserDto } from "./dto/userDto";

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  public findUsers(): Promise<UserEntity[]> {
    return this.userService.findUsers();
  }

  @Get(':id')
  public findUserById(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findUserById(id);
  }

  @Post()
  public createUser(@Body() user: UserDto): Promise<UserEntity> {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  public updateUser(@Param('id') id: number, @Body() user: UserDto): Promise<UserEntity> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }

}
