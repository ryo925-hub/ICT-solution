import { ApiCall } from "tsrpc";
import { ReqUnjoinEvent, ResUnjoinEvent } from "../../shared/protocols/Event/PtlUnjoinEvent";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqUnjoinEvent, ResUnjoinEvent>) {
    const { eventID } = call.req;

    try {
        const ret = await Global.collection('joinEvent').deleteOne({
            eventID,
            userID: call.currentUser._id
        });

        call.succ({})
    } catch (error) {
        if (error instanceof Error)
            call.error(error.message);
        else
            call.error('Unknown error');
    }
}