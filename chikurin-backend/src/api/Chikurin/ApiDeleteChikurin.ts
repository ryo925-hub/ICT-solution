import { ApiCall } from "tsrpc";
import { ReqDeleteChikurin, ResDeleteChikurin } from "../../shared/protocols/Chikurin/PtlDeleteChikurin";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqDeleteChikurin, ResDeleteChikurin>) {
    // TODO
    try {
        const res = await Global.collection('chikurin').deleteOne({
            _id: call.req.chikurinID
        })

        call.succ({

        })
    } catch (error) {
        if (error instanceof Error) {
            call.error(error.message)
        }
        else
            call.error('Unknown error')
    }

}