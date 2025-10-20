import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqRegist extends BaseRequest {
    firstName1: string
    lastName1: string
    firstName2: string
    lastName2: string
    birthday: Date
    mailAddress: string
    password: string
}

export interface ResRegist extends BaseResponse {

}

export const conf: BaseConf = {

}