import { BaseRequest, BaseResponse, BaseConf } from "./base";


/**
 * This is a test request to upload an image.
 */
export interface ReqUploadImageTest extends BaseRequest {
    otherString: string,
    otherNumber: number,
    images: {
        fileName: string,
        fileData: { [index: number]: number },
        fileType: string,
    }[]
}

export interface ResUploadImageTest extends BaseResponse {
    imageUrls: string[],
}

export const conf: BaseConf = {

}