import { ObjectId } from 'mongodb';

export interface chikurin {
    _id: ObjectId,
    owner: ObjectId,
    ownerName: string,
    postCode: string,
    address: string,
    area: number,
    bambooCount: number,
    category: string,
    else: string,
    imgs: string[]
}

