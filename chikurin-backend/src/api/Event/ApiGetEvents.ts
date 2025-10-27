import { ApiCall } from "tsrpc";
import { ReqGetEvents, ResGetEvents } from "../../shared/protocols/Event/PtlGetEvents";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetEvents, ResGetEvents>) {
    // TODO
    const ret = await Global.collection('event').find({}).toArray();

    //     const events = await Global.collection('event').aggregate([
    //   {
    //     $lookup: {
    //       from: 'joinEvent',
    //       localField: '_id',
    //       foreignField: 'eventID',
    //       as: 'joins'
    //     }
    //   },
    //   {
    //     $addFields: {
    //       joined: {
    //         $in: [userID, "$joins.userID"]
    //       }
    //     }
    //   },
    //   {
    //     $project: {
    //       joins: 0 // 不返回中间 join 数据，只保留 joined 标志
    //     }
    //   }
    // ]).toArray();

    call.succ({
        events: ret
    })
}