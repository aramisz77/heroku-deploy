import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
    unsigned: true,
  })
  id: number;

  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: false,
  })
  firstName: string | null;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: true,
  })
  lastName: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean;
}
