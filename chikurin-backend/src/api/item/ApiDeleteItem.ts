import { ApiCall } from "tsrpc";
import { ReqDeleteItem, ResDeleteItem } from "../../shared/protocols/item/PtlDeleteItem";

export default async function (call: ApiCall<ReqDeleteItem, ResDeleteItem>) {
    // TODO
    call.error('API Not Implemented');
}