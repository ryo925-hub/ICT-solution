import { ObjectId } from "mongodb";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Delete one event by id
 */
export interface ReqDeleteEvent extends BaseRequest {
    eventID: ObjectId
}

export interface ResDeleteEvent extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}