import { ApiCall } from "tsrpc";
import { ReqGetData, ResGetData } from "../shared/protocols/PtlGetData";

// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqGetData, ResGetData>) {
    console.log(call.currentUser);

    call.succ({
        data: AllData
    })
}

export const AllData: { content: string, time: Date }[] = [];