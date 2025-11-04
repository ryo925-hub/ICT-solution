import { ApiCall } from "tsrpc";
import { ReqRegist, ResRegist } from "../../shared/protocols/Login/PtlRegist";
import { Global } from "../../Global";

export default async function (call: ApiCall<ReqRegist, ResRegist>) {
    // TODO
    const { mailAddress, firstName1, lastName1, firstName2, lastName2, birthday, password,gender } = call.req;

    const user = await Global.collection('users').findOne({
        mailAddress,
    });

    if (user) {
        return call.error('User already exists');
    }

    const res = await Global.collection('users').insertOne({
        firstName1,
        lastName1,
        firstName2,
        lastName2,
        birthday,
        mailAddress,
        password,
        gender
    })
    console.log(res);

    call.succ({})
}