import { ObjectId } from "mongodb";
import { chikurin } from "../../entities/chikurin";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get one Chikurin information by id
 */
export interface ReqGetChikurin extends BaseRequest {
    chikurinID: ObjectId
}

export interface ResGetChikurin extends BaseResponse {
    chikurin: chikurin
}

export const conf: BaseConf = {
    needLogin: true
}