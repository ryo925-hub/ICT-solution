import { ApiCall } from "tsrpc";
import { ReqUpdateItem, ResUpdateItem } from "../../shared/protocols/item/PtlUpdateItem";

export default async function (call: ApiCall<ReqUpdateItem, ResUpdateItem>) {
    // TODO
    call.error('API Not Implemented');
}