import { ObjectId } from "mongodb";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Delete chikurin
 */
export interface ReqDeleteChikurin extends BaseRequest {
    chikurinID: ObjectId
}

export interface ResDeleteChikurin extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}