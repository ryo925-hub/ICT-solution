import { ApiCall } from "tsrpc";
import { ReqAddChikurin, ResAddChikurin } from "../../shared/protocols/Chikurin/PtlAddChikurin";
import { Global } from "../../Global";
import upload from "../../utils/upload";
import { ObjectId } from "mongodb";
import imageObjToU8 from "../../utils/imageObjToU8";

export default async function (call: ApiCall<ReqAddChikurin, ResAddChikurin>) {

    const imageUrls = new Array<string>;
    const images = call.req.images;
    if (images && images.length > 0) {
        const promises = images.map(async ({ fileData, fileName, fileType }) => {
            // console.log(image);
            const index = fileName.lastIndexOf('.')
            const type = fileName.slice(index + 1)
            const typeCate = fileType.slice(0, fileType.indexOf('/'))

            const imageUrl = await upload({
                folder: "images",
                type,
                typeCate: "image",
                id: new ObjectId
            }, imageObjToU8(fileData));

            imageUrls.push(imageUrl);
        })

        await Promise.all(promises);
    }
    delete call.req.images;
    delete call.req.__token;

    const res = await Global.collection('chikurin').insertOne({
        ...call.req,
        owner: call.currentUser._id,
        imgs: imageUrls
    });

    call.succ({
        chikurinID: res.insertedId
    })
}