import { ObjectId } from 'mongodb';

export interface users {
    _id: ObjectId
    firstName1:string
    lastName1:string
    firstName2:string
    lastName2:string
    birthday:Date
    mailAddress:string
    password:string
}
