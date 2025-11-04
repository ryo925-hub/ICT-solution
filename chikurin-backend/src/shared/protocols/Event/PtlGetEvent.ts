import { ObjectId } from "mongodb";
import { BaseRequest, BaseResponse, BaseConf } from "../base";
import { event } from "../../entities/event";

/**
 * Get one event by id
 */
export interface ReqGetEvent extends BaseRequest {
    eventID: ObjectId
}

export interface ResGetEvent extends BaseResponse {
    event: event
}

export const conf: BaseConf = {
    needLogin: true
}