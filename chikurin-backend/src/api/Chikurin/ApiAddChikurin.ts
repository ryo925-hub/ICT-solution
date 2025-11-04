import { ApiCall } from "tsrpc";
import { ReqAddChikurin, ResAddChikurin } from "../../shared/protocols/Chikurin/PtlAddChikurin";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqAddChikurin, ResAddChikurin>) {

    // TODO
    const res = await Global.collection('chikurin').insertOne({
        ...call.req,
        owner: call.currentUser._id
    });

    call.succ({
        chikurinID: res.insertedId
    })
}