import { ObjectId } from 'mongodb';

export interface event {
    _id: ObjectId,
    name: string,
    owner: ObjectId
}
