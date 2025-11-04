import { ApiCall } from "tsrpc";
import { ReqGetOwnningChikurin, ResGetOwnningChikurin } from "../../shared/protocols/Chikurin/PtlGetOwnningChikurin";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetOwnningChikurin, ResGetOwnningChikurin>) {
    // TODO
    const ret = await Global.collection('chikurin').find({
        owner: call.currentUser._id
    }).toArray();

    call.succ({
        chikurins: ret
    })

}