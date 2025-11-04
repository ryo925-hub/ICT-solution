import { chikurin } from "../../entities/chikurin";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get chikurins
 */
export interface ReqGetChikurins extends BaseRequest {
}

export interface ResGetChikurins extends BaseResponse {
    chikurins: chikurin[]
}

export const conf: BaseConf = {
    needLogin: true
}