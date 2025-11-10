import { ApiCall } from "tsrpc";
import { ReqUpdateProfile, ResUpdateProfile } from "../../shared/protocols/Login/PtlUpdateProfile";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqUpdateProfile, ResUpdateProfile>) {
    delete call.req.__token;
    const ret = await Global.collection('users').updateOne({
        _id: call.currentUser._id
    }, {
        $set: {
            ...call.req
        }
    })

    call.succ({

    })
}