import { ApiCall } from "tsrpc";
import { ReqGetJointEvents, ResGetJointEvents } from "../../shared/protocols/Event/PtlGetJointEvents";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetJointEvents, ResGetJointEvents>) {
    // TODO
    const ret = await Global.collection('joinEvent').aggregate(
        [
            {
                $match: {
                    userID: call.currentUser._id
                },
            },
            {
                $lookup: {
                    from: 'event',
                    localField: 'eventID',
                    foreignField: '_id',
                    as: 'event',
                }
            }
        ]
    ).toArray();
    console.log(ret);


    call.succ({
        events: ret.map(item => item.event[0])
    })
}