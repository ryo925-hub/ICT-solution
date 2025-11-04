import { chikurin } from "../../entities/chikurin";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Update chikurin info
 */
export interface ReqUpdateChikurin extends Omit<chikurin, '_id' | "owner" | "imgs">, BaseRequest {
    images?: {
        fileName: string,
        fileData: { [index: number]: number },
        fileType: string,
    }[]
}

export interface ResUpdateChikurin extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true,
}