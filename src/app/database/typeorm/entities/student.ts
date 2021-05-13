import { Entity,  PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Length, IsEmail, IsDate, IsBoolean, IsString, IsUUID } from 'class-validator';

@Entity()
export class Student  extends BaseEntity  {
    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    id: string;

    @Column()
    @IsString()
    @Length(1, 1000)
    firstName: string;

    @Column()
    @IsString()
    @Length(1, 666)
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsBoolean()
    isActive: boolean;

    @Column("timestamp")
    @IsDate()
    addedAt: Date;

}