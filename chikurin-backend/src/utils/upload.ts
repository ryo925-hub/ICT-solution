import fs from "fs/promises";
import { ObjectId } from "mongodb";

//path: uploads/...
export default async function ({ folder, typeCate, id, type }: { folder: string, typeCate: string, id?: ObjectId | string, type: string }, fileData: Uint8Array) {
    try {
        const path = `${folder}/${typeCate}${id || ''}${new Date().getTime()}.${type}`//image63b8eed76bd85268791e2baf1673417134777.png
        await fs.writeFile('uploads/' + path, fileData)
        const name = `/${path}`
        return name
    } catch (error) {
        console.log(error);
        throw new Error('Error')
    }
}