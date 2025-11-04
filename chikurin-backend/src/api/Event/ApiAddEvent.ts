import { ApiCall } from "tsrpc";
import { ReqAddEvent, ResAddEvent } from "../../shared/protocols/Event/PtlAddEvent";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqAddEvent, ResAddEvent>) {
    // TODO
    const owner = call.currentUser._id;
    const res = await Global.collection('event').insertOne({
        ...call.req,
        owner
    });
    await Global.collection('joinEvent').insertOne({
        eventID: res.insertedId,
        userID: owner
    })

    call.succ({
        eventID: res.insertedId
    })
}