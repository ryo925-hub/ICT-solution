import { event } from "../../entities/event";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Get joint events
 */
export interface ReqGetJointEvents extends BaseRequest {
    
}

export interface ResGetJointEvents extends BaseResponse {
    events: event[]
}

export const conf: BaseConf = {
    needLogin: true
}