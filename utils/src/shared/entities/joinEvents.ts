import { ObjectId } from 'mongodb';

export interface joinEvent {
    eventID: ObjectId
    userID: ObjectId
}
