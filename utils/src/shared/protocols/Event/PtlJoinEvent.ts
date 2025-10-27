import { ObjectId } from "mongodb";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Join event
 */
export interface ReqJoinEvent extends BaseRequest {
    eventID: ObjectId
}

export interface ResJoinEvent extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}