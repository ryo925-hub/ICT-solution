import { ObjectId } from 'mongodb';

export interface chikurin {
    _id: ObjectId,
    name: string,
    owner: ObjectId
}

