import { users } from "../../entities/user";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqLogin extends BaseRequest {
    loginID: string
    password: string
}

export interface ResLogin extends BaseResponse {
    user: users
}

export const conf: BaseConf = {

}