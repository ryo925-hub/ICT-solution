import { ApiCall } from "tsrpc";
import { ReqGetChikurin, ResGetChikurin } from "../../shared/protocols/Chikurin/PtlGetChikurin";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqGetChikurin, ResGetChikurin>) {
    const { chikurinID } = call.req;

    const ret = await Global.collection('chikurin').findOne({
        _id: chikurinID
    })

    if (!ret) {
        return call.error('Chikurin not found');
    }

    call.succ({
        chikurin: ret
    })
}