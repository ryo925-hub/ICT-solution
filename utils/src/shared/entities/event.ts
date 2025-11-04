import { ObjectId } from 'mongodb';

export interface event {
    _id: ObjectId,
    name: string,
    hoster: ObjectId
}
