// This is a demo code file
// Feel free to delete it

import { BaseRequest, BaseResponse } from "./base"

/**
 * 获取数据
 */
export interface ReqGetData extends BaseRequest {

}

export interface ResGetData extends BaseResponse {
    /** 返回所有数据列表 */
    data: {
        /** 消息内容 */
        content: string,
        /** 创建时间 */
        time: Date
    }[]
}