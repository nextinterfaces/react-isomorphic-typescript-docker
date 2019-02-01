import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./Category"

@Entity()
export class Condition {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    descr: string

    @ManyToMany(type => Category, {
        cascade: true
    })

    @JoinTable()
    categories: Category[]

}