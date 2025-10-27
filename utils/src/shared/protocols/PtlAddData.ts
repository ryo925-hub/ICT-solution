// This is a demo code file
// Feel free to delete it

import { BaseConf } from "./base";

/**
 * test AddData
 * This is a test interface for AddData
 */
export interface ReqAddData {
    content: string;
}

export interface ResAddData {
    time: Date
}

export const conf: BaseConf = {
    needLogin: true
}