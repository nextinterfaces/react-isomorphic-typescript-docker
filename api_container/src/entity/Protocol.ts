import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Condition } from "./Condition";

@Entity()
export class Protocol {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    descr: string

    @ManyToMany(type => Condition, {
        cascade: false
    })

    @JoinTable()
    categories: Condition[]

}