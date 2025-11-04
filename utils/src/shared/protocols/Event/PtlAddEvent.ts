import { ObjectId } from "mongodb";
import { event } from "../../entities/event";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Add event
 */
export interface ReqAddEvent extends BaseRequest, Omit<event, "_id" | "owner"> {

}

export interface ResAddEvent extends BaseResponse {
    eventID: ObjectId
}

export const conf: BaseConf = {
    needLogin: true
}