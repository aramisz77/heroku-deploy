import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../database/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  public async findUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  public async createUser(user: UserDto): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  public async updateUser(id: number, user: UserDto): Promise<UserEntity> {
    const findUser = await this.userRepository.findOne({
      where: { id },
    });

    if (!findUser) {
      throw new NotFoundException('User not found to update!');
    }

    console.log({
      ...findUser,
      ...user,
    })

    return this.userRepository.save({
      ...findUser,
      ...user,
    });
  }

  public async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
