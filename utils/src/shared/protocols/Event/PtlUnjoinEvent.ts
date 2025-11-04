import { ObjectId } from "mongodb";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Unjoin event
 */
export interface ReqUnjoinEvent extends BaseRequest {
    eventID: ObjectId
}

export interface ResUnjoinEvent extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}