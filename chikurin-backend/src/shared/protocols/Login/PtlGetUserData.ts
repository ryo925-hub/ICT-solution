import { users } from "../../entities/user";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetUserData extends BaseRequest {

}

export interface ResGetUserData extends BaseResponse {
    user: users
}

export const conf: BaseConf = {
    needLogin: true
}