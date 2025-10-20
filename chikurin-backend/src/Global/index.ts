/*
 * @Date: 2023-01-07 10:34:34
 * @LastEditors: Zireael 1193875164@qq.com
 * @LastEditTime: 2023-03-27 21:54:28
 * @FilePath: \A19\backend\src\Global\index.ts
 */
import { DbCollectionType } from './DbCollectionType';
import { Collection, Db, MongoClient, OptionalId } from "mongodb"
import conf from '../dev.json'

export class Global {
    static db: Db;
    static async initDb() {
        let uri: string;
        //@ts-ignore
        if (conf.admin) {
            //@ts-ignore
            uri = `mongodb://${conf.admin}:${conf.password}@${conf.url}:${conf.port}/Zireael?authSource=admin`
        }
        else {
            uri = 'mongodb://localhost:27017/Zireael'
        }
        try {
            // console.log(uri);
            const client = await new MongoClient(uri).connect();
            console.log(`connected to ${conf.url}`);
            this.db = client.db();

        } catch (error) {
            console.log(error);
        }
    }

    static collection<T extends keyof DbCollectionType>(col: T): Collection<OptionalId<DbCollectionType[T]>> {
        return this.db.collection(col)
    }
}