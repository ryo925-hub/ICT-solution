import { ApiCall } from "tsrpc";
import { ReqJoinEvent, ResJoinEvent } from "../../shared/protocols/Event/PtlJoinEvent";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqJoinEvent, ResJoinEvent>) {
    // TODO
    const { eventID } = call.req;
    const ret = await Global.collection('joinEvent').findOne({
        eventID,
        userID: call.currentUser._id
    });
    if (ret) {
        return call.error('You have already joined this event');
    }
    
    await Global.collection('joinEvent').insertOne({
        eventID,
        userID: call.currentUser._id
    })

    call.succ({});
}