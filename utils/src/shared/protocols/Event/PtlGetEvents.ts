import { event } from "../../entities/event";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get events
 */
export interface ReqGetEvents extends BaseRequest {

}

export interface ResGetEvents extends BaseResponse {
    events: event[]
}

export const conf: BaseConf = {
    needLogin: true
}