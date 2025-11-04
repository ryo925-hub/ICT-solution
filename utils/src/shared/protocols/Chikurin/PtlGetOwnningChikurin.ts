import { chikurin } from "../../entities/chikurin";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get ownning chikurin
 */
export interface ReqGetOwnningChikurin extends BaseRequest {

}

export interface ResGetOwnningChikurin extends BaseResponse {
    chikurins: chikurin[]
}

export const conf: BaseConf = {
    needLogin: true
}