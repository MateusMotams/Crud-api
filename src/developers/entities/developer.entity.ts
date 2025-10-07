import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const {nanoid} = require('nanoid');
@Entity("developers") //Cria uma tabela chamada developers
export class Developer {
        @PrimaryColumn()
        id: string; //dev+_dijasidasm 

        @Column() 
        name: string;

        @Column()
        email: string;

        @Column()
        dateOfBirth: Date;

        @BeforeInsert()
        generateId(){
            this.id = `dev_${nanoid(10)}`;
        }
}
