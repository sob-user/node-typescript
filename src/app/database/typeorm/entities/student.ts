import { Entity,  PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

const mostLongestFirstName: number = 1000;
const mostLongestLastName: number = 666;


@Entity()
export class Student  extends BaseEntity  {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        length: mostLongestFirstName
    })
    firstName: string;

    @Column({
        length: mostLongestLastName
    })
    lastName: string;

    @Column()
    isActive: boolean;

    @Column("timestamp")
    addedAt: Date;

}