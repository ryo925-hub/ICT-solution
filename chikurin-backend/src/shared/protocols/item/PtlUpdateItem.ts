import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdateItem extends BaseRequest {
    
}

export interface ResUpdateItem extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin: true
}