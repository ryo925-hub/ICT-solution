import { ApiCall } from "tsrpc";
import { ReqAddEvent, ResAddEvent } from "../../shared/protocols/Event/PtlAddEvent";
import { Global } from "../../Global";
import upload from "../../utils/upload";
import { ObjectId } from "mongodb";
import imageObjToU8 from "../../utils/imageObjToU8";

export default async function (call: ApiCall<ReqAddEvent, ResAddEvent>) {
    // TODO
    const imageUrls = new Array<string>;
    const images = call.req.images;
    // console.log(images);
    if (images && images.length > 0) {
        images.length = 1;
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


    const owner = call.currentUser._id;
    const res = await Global.collection('event').insertOne({
        ...call.req,
        owner,
        img: imageUrls.length > 0 ? imageUrls[0] : ""
    });
    await Global.collection('joinEvent').insertOne({
        eventID: res.insertedId,
        userID: owner
    })

    call.succ({
        eventID: res.insertedId
    })
}