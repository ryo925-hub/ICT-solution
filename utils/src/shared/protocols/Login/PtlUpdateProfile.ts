import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdateProfile extends BaseRequest {
    firstName1: string
    lastName1: string
    firstName2: string
    lastName2: string
    birthday: Date
    mailAddress: string
    password: string
    gender: string
}

export interface ResUpdateProfile extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true,
}