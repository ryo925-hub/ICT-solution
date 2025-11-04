import { ObjectId } from 'mongodb';

/* 
{ id: 1, name: "竹細工体験", category: "体験", area: "関東", price: 3000, img: "", description: "熟練の職人が教える、本格的な竹細工体験。世界に一つだけのオリジナル作品を作ってみませんか？" },
*/
export interface event {
    _id: ObjectId,
    name: string,
    category: string,
    area: string,
    price: number,
    img: string,
    description: string,
    startTime: Date,
    endTime: Date,
    owner: ObjectId,
}
