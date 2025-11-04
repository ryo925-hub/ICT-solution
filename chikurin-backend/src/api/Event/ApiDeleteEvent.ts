import { ApiCall } from "tsrpc";
import { ReqDeleteEvent, ResDeleteEvent } from "../../shared/protocols/Event/PtlDeleteEvent";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqDeleteEvent, ResDeleteEvent>) {
    const { eventID } = call.req;

    try {
        await Global.collection('event').deleteOne({ _id: eventID });
        await Global.collection('joinEvent').deleteMany({ eventID });

        call.succ({})
    } catch (error) {
        if (error instanceof Error)
            call.error(error.message)
        else
            call.error('Unknown error')
    }
}