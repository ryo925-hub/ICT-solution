import { ApiCall } from "tsrpc";
import { ReqGetUserData, ResGetUserData } from "../../shared/protocols/Login/PtlGetUserData";

export default async function (call: ApiCall<ReqGetUserData, ResGetUserData>) {


    // TODO
    call.succ({
        user: call.currentUser
    })
}