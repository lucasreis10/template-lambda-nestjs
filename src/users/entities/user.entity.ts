import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lastname: string;

  constructor(id: number, name: string, lastname: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }

  static newUser(name: string, lastname: string) {
    return new User(null, name, lastname);
  }
}
