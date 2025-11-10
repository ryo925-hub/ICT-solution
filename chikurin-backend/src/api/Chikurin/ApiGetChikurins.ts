import { ApiCall } from "tsrpc";
import { ReqGetChikurins, ResGetChikurins } from "../../shared/protocols/Chikurin/PtlGetChikurins";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetChikurins, ResGetChikurins>) {

    const ret = await Global.collection('chikurin').find({
        owner: call.currentUser._id
    }).toArray();

    call.succ({
        chikurins: ret
    });
}