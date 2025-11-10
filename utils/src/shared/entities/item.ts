import { ObjectId } from 'mongodb';

export interface item {
    _id: ObjectId,
    name: string,
    owner: ObjectId
}

//name
//cate
//area
//price
//description
//owner