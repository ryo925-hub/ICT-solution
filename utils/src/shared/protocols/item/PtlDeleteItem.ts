import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqDeleteItem extends BaseRequest {

}

export interface ResDeleteItem extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}