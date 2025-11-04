// This is a demo code file
// Feel free to delete it

import { BaseRequest, BaseResponse, BaseConf } from "./base"

/**
 * test GetData
 */
export interface ReqGetData extends BaseRequest {

}

export interface ResGetData extends BaseResponse {
    data: {
        content: string,
        time: Date
    }[]
}

export const conf: BaseConf = {
    needLogin: true
}