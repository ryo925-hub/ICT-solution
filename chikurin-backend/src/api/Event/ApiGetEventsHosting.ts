import { ApiCall } from "tsrpc";
import { ReqGetEventsHosting, ResGetEventsHosting } from "../../shared/protocols/Event/PtlGetEventsHosting";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetEventsHosting, ResGetEventsHosting>) {
    // TODO
    const ret = await Global.collection('event').find({
        hoster: call.currentUser._id
    }).toArray();

    call.succ({
        events: ret,
    })
}