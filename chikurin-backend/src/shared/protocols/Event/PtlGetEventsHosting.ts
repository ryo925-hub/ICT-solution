import { event } from "../../entities/event";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get hosting events
 */
export interface ReqGetEventsHosting extends BaseRequest {
    
}

export interface ResGetEventsHosting extends BaseResponse {
    events: event[]
}

export const conf: BaseConf = {
    needLogin: true
}