import { ApiCall } from "tsrpc";
import { ReqUploadImageTest, ResUploadImageTest } from "../shared/protocols/PtlUploadImageTest";
import upload from "../utils/upload";
import { ObjectId } from "mongodb";
import imageObjToU8 from "../utils/imageObjToU8";

export default async function (call: ApiCall<ReqUploadImageTest, ResUploadImageTest>) {
    // TODO
    try {
        const { images } = call.req;

        const imageUrls = new Array<string>;
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

        call.succ({
            imageUrls
        })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return call.error(error.message)
        }
    }
}