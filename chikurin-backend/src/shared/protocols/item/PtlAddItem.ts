import { item } from "../../entities/item";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

/**
 * Add item(regist item)
 */
export interface ReqAddItem extends BaseRequest, Omit<item, "_id"> {

}

export interface ResAddItem extends BaseResponse {

}

export const conf: BaseConf = {
    needLogin: true
}