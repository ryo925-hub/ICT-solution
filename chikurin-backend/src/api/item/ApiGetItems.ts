import { ApiCall } from "tsrpc";
import { ReqGetItems, ResGetItems } from "../../shared/protocols/item/PtlGetItems";

export default async function (call: ApiCall<ReqGetItems, ResGetItems>) {
    // TODO
    call.error('API Not Implemented');
}