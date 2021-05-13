import { Entity,  PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

const mostLongestFirstName: number = 1000;
const mostLongestLastName: number = 666;


@Entity()
export class  User  extends BaseEntity  {
    @PrimaryGeneratedColumn("uuid")
    id: string;

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

    @Column("time with time zone")
    addedAt: Date;

}