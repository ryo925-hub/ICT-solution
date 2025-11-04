import { ApiCall } from "tsrpc";
import { ReqGetEvent, ResGetEvent } from "../../shared/protocols/Event/PtlGetEvent";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetEvent, ResGetEvent>) {
    const { eventID } = call.req;

    const ret = await Global.collection('event').findOne({ _id: eventID });

    if (!ret) {
        return call.error('Event not found', { eventID });
    }

    call.succ({ event: ret });
}