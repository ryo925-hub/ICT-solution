import { ObjectId } from 'mongodb';

/* 
first name1 : リョウ
last name1 : スギヤマ
first name2 : 涼
last name2 : 杉山
birthday : 2002/09/25
mailadress : abcd@gmail.com
password : password
*/
export interface users {
    _id: ObjectId
    firstName1: string
    lastName1: string
    firstName2: string
    lastName2: string
    birthday: Date
    mailAddress: string
    password: string
    gender: string
}
