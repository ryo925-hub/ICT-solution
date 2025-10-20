import { ApiCall } from "tsrpc";
import { sign } from 'jsonwebtoken'
import { ReqLogin, ResLogin } from "../../shared/protocols/Login/PtlLogin";
import { Global } from "../../Global";
import { secret } from "../../dev.json"

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
    // TODO
    const { loginID, password } = call.req

    const user = await Global.collection('users').findOne({ loginID });

    if (user === null) {
        return call.error('Invalid loginID or password')
    }
    else if (user.password === password) {
        const token = sign({
            id: user._id,
        }, secret, {
            expiresIn: '5d',
            algorithm: 'HS512'
        })

        return call.succ({
            token,
            user
        })
    }
    else {
        return call.error('Invalid loginID or password')
    }
}
