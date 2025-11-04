import { ObjectId } from "mongodb";
import { chikurin } from "../../entities/chikurin";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Add chikurin
 */
export interface ReqAddChikurin extends Omit<chikurin, '_id' | "owner" | "imgs">, BaseRequest {
    images?: {
        fileName: string,
        fileData: { [index: number]: number },
        fileType: string,
    }[]
}

export interface ResAddChikurin extends BaseResponse {
    chikurinID: ObjectId
}

export const conf: BaseConf = {
    needLogin: true
}