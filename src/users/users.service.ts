import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {DeleteResult, Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
  ) {
  }

  async create({name, lastname}: CreateUserDto): Promise<User> {
    const user = User.newUser(name, lastname);

    return await this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        id,
      }
    });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
